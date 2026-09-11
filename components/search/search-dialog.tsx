"use client"

import * as React from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

import { sidebarData } from "@/data/sidebar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function SearchDialog({
  trigger,
}: {
  trigger: React.ReactElement
}) {
  const [query, setQuery] = React.useState("")
  const threads = sidebarData.threads
    .filter((thread) => thread.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 10)

  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Search chats</DialogTitle>
          <DialogDescription>Search your conversations.</DialogDescription>
        </DialogHeader>
        <Input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search chats..."
          aria-label="Search chats"
        />
        <div className="max-h-72 overflow-y-auto">
          {threads.length > 0 ? (
            threads.map((thread) => (
              <Link
                key={thread.name}
                href={thread.url}
                className="flex items-center gap-2 hover:bg-accent px-2 py-2 rounded-md text-sm"
              >
                <MessageCircle className="size-4 shrink-0" />
                <span className="truncate">{thread.name}</span>
              </Link>
            ))
          ) : (
            <p className="py-6 text-muted-foreground text-sm text-center">
              No chats found.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}