import { notFound, redirect } from "next/navigation"
import { ThreadChatLoader } from "@/components/chat/thread-chat-loader"

export default async function ChatPage({
  params,
}: {
  params: Promise<{ threadId?: string[] }>
}) {
  const { threadId } = await params

  if (!threadId?.length) redirect("/")
  if (threadId.length !== 1) notFound()
  // ThreadChat reads the threadId from the URL via ThreadProvider.
  return <ThreadChatLoader />
}