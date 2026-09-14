"use client"

import type { ReactNode } from "react"
import { Copy, Pencil, RefreshCw, Volume2 } from "lucide-react"
import type { ThreadMessage } from "@/data/threads"
import { Markdown } from "@/components/prompt-kit/markdown"
import { Button } from "@/components/ui/button"

function MessageActionButton({
  label,
  children,
  onClick,
}: {
  label: string
  children: ReactNode
  onClick?: () => void
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      aria-label={label}
      title={label}
      className="hover:bg-muted rounded-md text-muted-foreground hover:text-muted-foreground cursor-pointer"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export function Conversation({ messages }: { messages: ThreadMessage[] }) {

  const copyMessage = (content: string) => {
    void navigator.clipboard.writeText(content)
  }

  const readMessage = (content: string) => {
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(content))
  }

  return (
    <div className="flex flex-col gap-6 mx-auto px-4 py-8 w-full max-w-3xl">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`group flex ${message.role === "human" ? "justify-end" : "justify-start"}`}
        >
          <div className="max-w-[80%] text-foreground text-sm leading-6">
            <div
              className={
                message.role === "human"
                  ? "mt-9 rounded-2xl bg-[#F0EFED]/50 px-4 py-2.5"
                  : ""
              }
            >
              <Markdown
                id={message.id}
                className={
                  message.role === "ai"
                    ? "prose prose-sm max-w-none dark:prose-invert prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:my-3 prose-p:leading-6 prose-ul:my-1 prose-ol:my-1 prose-li:my-0 prose-a:wrap-break-word prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:not-italic prose-img:rounded-lg prose-hr:my-4 prose-table:block prose-table:max-w-full prose-table:overflow-x-auto prose-th:bg-muted prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 space-y-1"
                    : "[&_p]:m-0 [&_p+p]:mt-2"
                }
              >
                {message.content}
              </Markdown>
            </div>
            <div
              className={`mt-1 flex gap-0 transition-opacity ${message.role === "ai" && index === messages.length - 1
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
                } ${message.role === "human" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "ai" ? (
                <>
                  <MessageActionButton
                    label="Copy response"
                    onClick={() => copyMessage(message.content)}
                  >
                    <Copy className="size-4" />
                  </MessageActionButton>
                  <MessageActionButton label="Regenerate response">
                    <RefreshCw className="size-4" />
                  </MessageActionButton>
                  <MessageActionButton
                    label="Read response aloud"
                    onClick={() => readMessage(message.content)}
                  >
                    <Volume2 className="size-4" />
                  </MessageActionButton>
                </>
              ) : (
                <>
                  <MessageActionButton
                    label="Copy message"
                    onClick={() => copyMessage(message.content)}
                  >
                    <Copy className="size-4" />
                  </MessageActionButton>
                  <MessageActionButton label="Edit message">
                    <Pencil className="size-4" />
                  </MessageActionButton>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
