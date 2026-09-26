"use client"

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react"
import { usePathname } from "next/navigation"
import { useStream } from "@langchain/langgraph-sdk/react"

// Pattern from frontend_2/welman-ai-client ThreadProvider:
// the URL is the single source of truth for the active thread.
// - /chat/<id>  → resume that thread
// - anything else (e.g. /) → fresh thread (threadId = null)
// Navigating back to / therefore deterministically resets the chat,
// without redirects or prop-driven thread state.
function getThreadFromPath(path: string): string | null {
  if (!path.startsWith("/chat/")) return null
  const segments = path.split("/")
  if (segments.length >= 3 && segments[2]) return segments[2]
  return null
}

type ThreadContextValue = {
  threadId: string | null
  thread: ReturnType<typeof useStream<Record<string, unknown>>>
  submitMessage: (message: string) => Promise<void>
}

const ThreadContext = createContext<ThreadContextValue | null>(null)

export function ThreadProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const threadId = getThreadFromPath(pathname)
  const pendingTitleMessage = useRef<string | null>(null)

  const handleThreadIdChange = (newThreadId: string | null) => {
    if (!newThreadId) return
    const newPath = `/chat/${newThreadId}`
    if (pathname !== newPath) {
      // replaceState keeps the stream mounted; router navigation would
      // remount the page and kill an in-flight run.
      window.history.replaceState(null, "", newPath)
    }

    // Wait to refresh until title generation finishes; the list endpoint may
    // lag behind thread creation and otherwise briefly show "New chat".
    const firstText = pendingTitleMessage.current
    pendingTitleMessage.current = null
    if (firstText) {
      void fetch("/api/threads/title", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ threadId: newThreadId, message: firstText }),
      })
        .then((response) => {
          if (!response.ok) throw new Error(`Title request failed: ${response.status}`)
        })
        .catch((error) => console.error("Error generating title:", error))
        .finally(() => window.dispatchEvent(new Event("threads:refresh")))
    }
  }

  const thread = useStream<Record<string, unknown>>({
    apiUrl: "http://localhost:2026",
    assistantId: "mitki_agent",
    threadId: threadId ?? undefined,
    onThreadId: handleThreadIdChange,
  })

  const submitMessage = useCallback(async (message: string): Promise<void> => {
    if (!threadId) pendingTitleMessage.current = message
    await thread.submit({ messages: [{ type: "human", content: message }] })
  }, [thread, threadId])

  // Normalize the empty chat route; threadId is derived directly from pathname.
  useEffect(() => {
    if (pathname === "/chat" || pathname === "/chat/") {
      window.history.replaceState(null, "", "/")
    }
  }, [pathname])

  const value = useMemo(
    () => ({ threadId, thread, submitMessage }),
    [threadId, thread, submitMessage],
  )

  return (
    <ThreadContext.Provider value={value}>
      {children}
    </ThreadContext.Provider>
  )
}

export function useThread(): ThreadContextValue {
  const context = useContext(ThreadContext)
  if (!context) {
    throw new Error("useThread must be used within a ThreadProvider")
  }
  return context
}
