"use client"

import dynamic from "next/dynamic"

const ThreadChat = dynamic(() => import("@/components/chat/thread-chat"), {
  ssr: false,
})

export function ThreadChatLoader({ threadId }: { threadId?: string }) {
  return <ThreadChat threadId={threadId} />
}