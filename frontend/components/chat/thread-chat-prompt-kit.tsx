"use client"

import { useEffect } from "react"
import { ChatComposer } from "@/components/chat/chat-composer"
import { Conversation } from "@/components/chat/conversation"
import { useThread } from "@/components/chat/thread-provider"
import type { ThreadMessage } from "@/data/threads"

export default function ThreadChat() {
  const { thread, submitMessage } = useThread()

  const messages: ThreadMessage[] = thread.messages.flatMap((message, index) => {
    const type = message.type
    if (type !== "human" && type !== "ai") return []
    const role = type === "human" ? "human" : "ai"
    const content = typeof message.content === "string"
      ? message.content
      : message.content
        .flatMap((part) => typeof part === "string" ? [part] : "text" in part && typeof part.text === "string" ? [part.text] : [])
        .join("")
    return [{ id: message.id ?? `${role}-${index}`, role, content }]
  })
  const hasMessages = messages.length > 0

  useEffect(() => {
    if (thread.error) console.error("Chat stream failed:", thread.error)
  }, [thread.error])

  const composer = (
    <div className="mx-auto w-full max-w-3xl">
      <ChatComposer
        isLoading={thread.isLoading}
        onSubmit={(message) => {
          void submitMessage(message)
        }}
      />
    </div>
  )

  if (!hasMessages) {
    return (
      <div className="flex justify-center items-center p-6 h-full min-h-0">
        <div className="w-full max-w-2xl">
          <h1 className="mb-5 font-medium text-2xl text-center">What should we explore?</h1>
          {composer}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full min-h-0 overflow-hidden">
      <div className="flex-1 pt-12 min-h-0 overflow-y-auto scroll-fade-y">
        <Conversation messages={messages} />
      </div>
      <div className="bg-background px-4 pt-3 pb-4 w-full shrink-0">
        {composer}
      </div>
    </div>
  )
}
