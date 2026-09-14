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
    <div className="flex flex-col h-full min-h-0">
      <div className="flex-1 min-h-0 overflow-y-auto">
        <Conversation messages={dummyConversation} />
      </div>
      <div className="bg-background px-4 py-4 border-t w-full">
        <div className="mx-auto w-full max-w-3xl">
          <ChatComposer />
        </div>
      </div>
    </div>
  )
}