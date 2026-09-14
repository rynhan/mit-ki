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
                ? "max-w-[80%] rounded-2xl bg-[#F0EFED]/50 mt-9 px-4 py-2.5 text-sm text-foreground"
                : "max-w-[80%] text-sm leading-6 text-foreground"
            }
          >
            <Markdown
              id={message.id}
              className={
                message.role === "assistant"
                  ? "prose prose-sm max-w-none dark:prose-invert prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:my-3 prose-p:leading-6 prose-ul:my-1 prose-ol:my-1 prose-li:my-0 prose-a:wrap-break-word prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:not-italic prose-img:rounded-lg prose-hr:my-4 prose-table:block prose-table:max-w-full prose-table:overflow-x-auto prose-th:bg-muted prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 space-y-1"
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
