import { ChatComposer } from "@/components/chat/chat-composer"

export default function HomePage() {
  return (
    <div className="flex justify-center items-center p-6 min-h-full">
      <div className="w-full max-w-2xl">
        <h1 className="mb-5 font-medium text-2xl text-center">What should we explore?</h1>
        <ChatComposer />
      </div>
    </div>
  )
}