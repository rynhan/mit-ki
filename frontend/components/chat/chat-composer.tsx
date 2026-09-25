"use client"

import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/prompt-kit/prompt-input"
import { Button } from "@/components/ui/button"
import { Plus, ArrowUp } from "lucide-react"
import { useState } from "react"

export function ChatComposer({
  onSubmit,
  isLoading = false,
}: {
  onSubmit: (message: string) => void
  isLoading?: boolean
}) {
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    const message = value.trim()
    if (!message || isLoading) return
    onSubmit(message)
    setValue("")
  }

  return (
    <PromptInput
      value={value}
      onValueChange={setValue}
      maxHeight={180}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      className="bg-background shadow-sm p-2 rounded-3xl w-full"
    >
      <PromptInputTextarea
        placeholder="Ask anything..."
        aria-label="Ask anything..."
        className="px-2 py-2 min-h-10 sm:text-sm md:text-sm lg:text-sm placeholder:text-sm"
      />
      <PromptInputActions className="justify-between px-0">
        <PromptInputAction tooltip="Add attachment" side="bottom">
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            aria-label="Add attachment"
            className="rounded-full hover:cursor-pointer"
          >
            <Plus className="size-5" />
          </Button>
        </PromptInputAction>
        <PromptInputAction tooltip="Send message">
          <Button
            type="button"
            variant="default"
            size="icon-lg"
            aria-label="Send message"
            disabled={!value.trim() || isLoading}
            className="bg-[#0890FF] hover:bg-[#0890FF]/90 disabled:bg-[#0890FF]/30 disabled:opacity-100 rounded-full text-white hover:cursor-pointer"
            onClick={handleSubmit}
          >
            <ArrowUp className="size-5" />
          </Button>
        </PromptInputAction>
      </PromptInputActions>
    </PromptInput>
  )
}
