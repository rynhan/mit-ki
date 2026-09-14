import type { ChatMessage } from "@/data/chat"
import { Markdown } from "@/components/prompt-kit/markdown"

export function Conversation({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="flex flex-col gap-6 mx-auto px-4 py-8 w-full max-w-3xl">
      {messages.map((message) => (
        <div
          key={message.id}
          className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
        >
          <div
            className={
              message.role === "user"
                ? "max-w-[80%] rounded-2xl bg-[#F0EFED] px-4 py-2.5 text-sm text-foreground"
                : "max-w-[80%] text-sm leading-6 text-foreground"
            }
          >
            <Markdown
              id={message.id}
              className={
                message.role === "assistant"
                  ? "space-y-4"
                  : "[&_p]:m-0 [&_p+p]:mt-2"
              }
            >
              {message.content}
            </Markdown>
          </div>
        </div>
      ))}
    </div>
  )
}
