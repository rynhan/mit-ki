"use client"

import { useCallback, useMemo } from "react"
import { useStream } from "@langchain/langgraph-sdk/react"
import {
  AssistantRuntimeProvider,
  useExternalStoreRuntime,
  type AppendMessage,
  type ThreadMessageLike,
} from "@assistant-ui/react"

import { Thread } from "@/components/assistant-ui/elements/thread.aui"

// Convert LangGraph SDK messages into assistant-ui's ThreadMessageLike format.
// Only human/ai messages are rendered; string and content-part arrays both
// collapse to plain text parts.
function toThreadMessages(
  messages: ReturnType<typeof useStream>["messages"],
): ThreadMessageLike[] {
  return messages.flatMap((message, index) => {
    const type = message.type
    if (type !== "human" && type !== "ai") return []
    const role = type === "human" ? "user" : "assistant"
    const content = typeof message.content === "string"
      ? [{ type: "text" as const, text: message.content }]
      : message.content.flatMap((part) =>
        "text" in part && typeof part.text === "string"
          ? [{ type: "text" as const, text: part.text }]
          : [],
      )
    return [{ id: message.id ?? `${role}-${index}`, role, content }]
  })
}

export default function ThreadChat({ threadId }: { threadId?: string }) {
  const thread = useStream({
    apiUrl: "http://localhost:2026",
    assistantId: "mitki_agent",
    ...(threadId ? { threadId } : {}),
    // ponytail: replaceState keeps the stream mounted; router.replace remounts...
    // ...the page and kills the run. Full client-side thread switching if needed later.
    onThreadId: (id) => window.history.replaceState(null, "", `/chat/${id}`),
  })

  const messages = useMemo(
    () => toThreadMessages(thread.messages),
    [thread.messages],
  )

  const onNew = useCallback(
    async (message: AppendMessage) => {
      const text = message.content
        .filter((part) => part.type === "text")
        .map((part) => part.text)
        .join("")
      // ponytail: typed message objects required — bare strings break the backend OpenInference tracer.
      await thread.submit({ messages: [{ type: "human", content: text }] })
    },
    [thread],
  )

  const runtime = useExternalStoreRuntime({
    messages,
    isRunning: thread.isLoading,
    onNew,
    onCancel: () => thread.stop(),
    convertMessage: (m) => m,
  })

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  )
}
