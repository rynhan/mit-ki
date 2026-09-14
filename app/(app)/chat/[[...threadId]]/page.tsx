import { redirect } from "next/navigation"
import { ChatComposer } from "@/components/chat/chat-composer"
import { Conversation } from "@/components/chat/conversation"
import { dummyConversation } from "@/data/chat"

export default async function ChatPage({
  params,
}: {
  params: Promise<{ threadId?: string[] }>
}) {
  const { threadId } = await params

  if (!threadId?.length) {
    redirect("/")
  }

  return (
    <div className="flex flex-col h-full min-h-0 overflow-hidden">
      <div className="flex-1 pt-12 min-h-0 overflow-y-auto scroll-fade-y">
        <Conversation messages={dummyConversation} />
      </div>
      <div className="bg-background px-4 pt-3 pb-4 w-full shrink-0">
        <div className="mx-auto w-full max-w-3xl">
          <ChatComposer />
        </div>
      </div>
    </div>
  )
}