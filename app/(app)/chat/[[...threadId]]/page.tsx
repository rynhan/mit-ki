import { redirect } from "next/navigation"

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
    <div className="flex justify-center items-center p-6 min-h-full">
      <div className="text-center">
        <h1 className="font-semibold text-2xl">Chat</h1>
        <p className="mt-2 text-muted-foreground">
          Thread ID: {threadId.join("/")}
        </p>
      </div>
    </div>
  )
}