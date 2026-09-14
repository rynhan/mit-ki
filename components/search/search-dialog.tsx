"use client"

import * as React from "react"
import Link from "next/link"
import { X } from "lucide-react"

import { projects } from "@/data/projects"
import { threads as threadData } from "@/data/threads"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

type ChatMessage = {
  role: string
  content: unknown
}

type Thread = {
  id: string
  name: string
  updated_at: string
  chat_messages: ChatMessage[]
}

type Project = {
  id: string
  name: string
  emoji: string
  updated_at: string
}

function toTimestamp(value: string) {
  const timestamp = new Date(value).getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
}

function getMessageText(content: unknown) {
  if (typeof content === "string") return content

  if (Array.isArray(content)) {
    return content
      .filter(
        (item): item is { type: string; text: string } =>
          typeof item === "object" &&
          item !== null &&
          "type" in item &&
          "text" in item &&
          typeof item.text === "string" &&
          item.type === "text"
      )
      .map((item) => item.text)
      .join(" ")
  }

  return ""
}

function getThreadMessages(thread: Thread) {
  return thread.chat_messages
    .filter((message) => message.role === "human" || message.role === "ai")
    .map((message) => getMessageText(message.content))
    .filter(Boolean)
}

function highlight(text: string, query: string) {
  if (!query) return text

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const parts = text.split(new RegExp(`(${escapedQuery})`, "ig"))

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={`${part}-${index}`}
        className="bg-primary/10 px-0.5 rounded text-primary"
      >
        {part}
      </mark>
    ) : (
      <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
    )
  )
}

function formatDate(timestamp: number) {
  const date = new Date(timestamp)
  const now = new Date()

  if (date.toDateString() === now.toDateString()) return "Today"

  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)

  if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday"
  }

  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: date.getFullYear() === now.getFullYear() ? undefined : "numeric",
  }).format(date)
}

function matches(value: string, query: string) {
  return value.toLowerCase().includes(query)
}

function getMatchingMessage(thread: Thread, query: string) {
  return getThreadMessages(thread).find((message) => matches(message, query))
}

function ResultRow({
  title,
  date,
  message,
  query,
  href,
}: {
  title: string
  date: number
  message?: string
  query: string
  href?: string
}) {
  const content = (
    <span className="flex justify-between items-center gap-6 bg-secondary/20 hover:bg-secondary px-4 py-3 rounded-xl w-full min-h-14 text-left transition-colors">
      <span className="min-w-0">
        <span className="block font-medium text-foreground text-sm truncate">
          {highlight(title, query)}
        </span>

        {message && query && (
          <span className="block pt-1 text-muted-foreground text-xs truncate">
            {highlight(message, query)}
          </span>
        )}
      </span>

      <span className="ps-6 text-muted-foreground text-xs shrink-0">
        {formatDate(date)}
      </span>
    </span>
  )

  return href ? (
    <Link href={href} className="block w-full">
      {content}
    </Link>
  ) : (
    content
  )
}

export function SearchDialog({
  trigger,
}: {
  trigger: React.ReactElement
}) {
  const [query, setQuery] = React.useState("")
  const normalizedQuery = query.trim().toLowerCase()

  const threads = threadData as Thread[]
  const projectItems = projects as Project[]

  const recentItems = [
    ...threads.map((thread) => ({
      key: `thread-${thread.id}`,
      title: thread.name,
      date: toTimestamp(thread.updated_at),
      href: `/chat/${thread.id}`,
    })),
    ...projectItems.map((project) => ({
      key: `project-${project.id}`,
      title: `${project.emoji} ${project.name}`,
      date: toTimestamp(project.updated_at),
      href: undefined,
    })),
  ]
    .sort((a, b) => b.date - a.date)
    .slice(0, 10)

  const matchingThreads = threads.filter((thread) => {
    const message = getThreadMessages(thread).join(" ")
    return (
      matches(thread.name, normalizedQuery) ||
      matches(message, normalizedQuery)
    )
  })

  const matchingProjects = projectItems.filter((project) =>
    matches(project.name, normalizedQuery)
  )

  const clearQuery = () => setQuery("")

  return (
    <Dialog>
      <DialogTrigger render={trigger} />

      <DialogContent
        showCloseButton={false}
        className="flex flex-col gap-0 p-0 w-full sm:max-w-3xl h-full max-h-125"
      >
        <DialogTitle className="sr-only">Search chats</DialogTitle>

        <div className="relative p-3">
          <Input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search chats..."
            aria-label="Search chats"
            className="pe-10 border-0 focus-visible:ring-transparent h-12"
          />

          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={clearQuery}
              className="top-1/2 right-5 absolute flex justify-center items-center rounded-full size-6 text-muted-foreground hover:text-foreground -translate-y-1/2"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto">
          {!normalizedQuery ? (
            <ul className="space-y-2 p-2">
              {recentItems.map((item) => (
                <li key={item.key}>
                  <ResultRow
                    title={item.title}
                    date={item.date}
                    query=""
                    href={item.href}
                  />
                </li>
              ))}
            </ul>
          ) : matchingThreads.length === 0 &&
            matchingProjects.length === 0 ? (
            <p className="flex justify-center items-center h-full text-muted-foreground text-sm">
              No chats found.
            </p>
          ) : (
            <ul className="space-y-2 p-2">
              {matchingProjects.map((project) => (
                <li key={`project-${project.id}`}>
                  <ResultRow
                    title={`${project.emoji} ${project.name}`}
                    date={toTimestamp(project.updated_at)}
                    query={normalizedQuery}
                  />
                </li>
              ))}

              {matchingThreads.slice(0, 10).map((thread) => (
                <li key={`thread-${thread.id}`}>
                  <ResultRow
                    title={thread.name}
                    date={toTimestamp(thread.updated_at)}
                    message={getMatchingMessage(thread, normalizedQuery)}
                    query={normalizedQuery}
                    href={`/chat/${thread.id}`}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}