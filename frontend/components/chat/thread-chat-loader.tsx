"use client"

import dynamic from "next/dynamic"

// Feature flag: pick the chat UI implementation.
//   "assistant-ui" — assistant-ui Thread (branching, markdown, tool UIs)
//   "prompt-kit"   — our own Conversation + ChatComposer (prompt-kit)
// Set NEXT_PUBLIC_CHAT_UI in .env.local; defaults to assistant-ui.
const CHAT_UI = (process.env.NEXT_PUBLIC_CHAT_UI ?? "assistant-ui") as
  | "assistant-ui"
  | "prompt-kit"

const ThreadChat = dynamic(
  CHAT_UI === "prompt-kit"
    ? () => import("@/components/chat/thread-chat-prompt-kit")
    : () => import("@/components/chat/thread-chat-assistant-ui"),
  {
    ssr: false,
  },
)

// The thread/stream itself lives in ThreadProvider (mounted in the app
// layout); this loader only picks the UI implementation. threadId is derived
// from the URL by the provider, so no prop is needed.
export function ThreadChatLoader() {
  return <ThreadChat />
}