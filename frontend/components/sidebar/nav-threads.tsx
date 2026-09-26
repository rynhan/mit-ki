"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import {
  Archive,
  ChevronDown,
  ChevronRight,
  Folder,
  ListFilter,
  MoreHorizontal,
  Pencil,
  Pin,
  PinOff,
  SquarePen,
  Trash,
} from "lucide-react"
import { Loader2 } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import type { SidebarThread } from "@/data/sidebar"
import { useThreads, type AgentThread } from "@/hooks/use-threads"

// Convert agent-server thread metadata into the sidebar shape.
function toSidebarThread(thread: AgentThread): SidebarThread {
  const title =
    typeof thread.metadata?.thread_name === "string" && thread.metadata.thread_name
      ? thread.metadata.thread_name
      : "New chat"
  return {
    id: thread.thread_id,
    name: title,
    summary: "",
    created_at: thread.created_at,
    updated_at: thread.updated_at,
    is_pinned: false,
    is_temporary: false,
    chat_messages: [],
    url: `/chat/${thread.thread_id}`,
    createdAt: new Date(thread.created_at).getTime(),
    lastActiveAt: new Date(thread.updated_at).getTime(),
  }
}

export function NavThreads({ label = "Chats" }: { label?: string }) {
  const { threads: agentThreads, loading } = useThreads()
  const threads = React.useMemo(
    () => agentThreads.map(toSidebarThread),
    [agentThreads],
  )
  const { isMobile, setOpenMobile } = useSidebar()
  const router = useRouter()
  const [sortBy, setSortBy] = React.useState<"last-active" | "created-at">(
    "last-active"
  )
  const sortedThreads = React.useMemo(
    () =>
      [...threads].sort((a, b) => {
        const aValue = sortBy === "created-at" ? a.createdAt : a.lastActiveAt
        const bValue = sortBy === "created-at" ? b.createdAt : b.lastActiveAt

        return bValue - aValue || a.name.localeCompare(b.name)
      }),
    [sortBy, threads]
  )

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden text-sm">
      <Collapsible defaultOpen className="group/section">
        <div className="relative">
          <CollapsibleTrigger
            className="justify-start hover:bg-transparent w-full font-semibold text-muted-foreground hover:text-muted-foreground text-sm cursor-pointer"
            render={
              <SidebarGroupLabel
                render={
                  <button
                    type="button"
                  />
                }
              />
            }
          >
            <span>{label}</span>
            <ChevronRight className="group-data-open/section:hidden stroke-[1.5]" />
            <ChevronDown className="hidden group-data-open/section:block stroke-[1.5]" />
          </CollapsibleTrigger>
          <div className="top-1/2 right-1.5 absolute flex items-center gap-1 -translate-y-1/2">
            <button
              type="button"
              aria-label="New chat"
              className="flex justify-center items-center opacity-0 focus-visible:opacity-100 group-hover/section:opacity-100 rounded-md focus-visible:ring-2 size-5 text-muted-foreground hover:text-muted-foreground transition-opacity cursor-pointer"
              onClick={() => {
                // Start a fresh chat on "/"; close the mobile sheet first so
                // the user lands on the chat view, not behind the overlay.
                if (isMobile) {
                  setOpenMobile(false)
                  router.push("/")
                } else {
                  router.push("/")
                }
              }}
            >
              <SquarePen className="stroke-[1.5] hover:stroke-2 size-4" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button
                    type="button"
                    aria-label="Filter chats"
                    className="flex justify-center items-center opacity-0 focus-visible:opacity-100 group-hover/section:opacity-100 rounded-md focus-visible:ring-2 size-5 text-muted-foreground hover:text-muted-foreground transition-opacity cursor-pointer"
                  />
                }
              >
                <ListFilter className="stroke-[1.5] hover:stroke-2 size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-36">
                <DropdownMenuRadioGroup
                  value={sortBy}
                  onValueChange={(value) =>
                    setSortBy(value as "last-active" | "created-at")
                  }
                >
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuRadioItem value="last-active">
                    Last active
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="created-at">
                    Created at
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CollapsibleContent>
          <SidebarMenu>
            {loading && threads.length === 0 && (
              <div className="flex justify-center p-4 text-muted-foreground">
                <Loader2 className="size-4 animate-spin" />
              </div>
            )}
            {!loading && threads.length === 0 && (
              <div className="px-2 py-1 text-muted-foreground text-sm">
                No chats yet
              </div>
            )}
            {sortedThreads.map((item) => (
              <NavThreadItem key={item.id} thread={item} isMobile={isMobile} />
            ))}
          </SidebarMenu>
        </CollapsibleContent>
      </Collapsible>
    </SidebarGroup>
  )
}

export function NavThreadItem({
  thread,
  isMobile,
  isPinned = false,
}: {
  thread: SidebarThread
  isMobile: boolean
  isPinned?: boolean
}) {
  const pathname = usePathname()
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={pathname === thread.url}
        render={
          <Link href={thread.url} title={thread.name} aria-label={thread.name} />
        }
        className="text-sm cursor-pointer"
      >
        <span>{thread.name}</span>
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <SidebarMenuAction
              aria-label={`Actions for ${thread.name}`}
              className="opacity-0 aria-expanded:opacity-100 md:opacity-0 hover:opacity-100 peer-hover/menu-button:opacity-100 cursor-pointer"
            />
          }
        >
          <MoreHorizontal />
          <span className="sr-only">More</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-48"
          side={isMobile ? "bottom" : "right"}
          align={isMobile ? "end" : "start"}
        >
          <DropdownMenuItem>
            <Pencil className="text-muted-foreground" />
            <span>Rename</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {isPinned ? (
              <PinOff className="text-muted-foreground" />
            ) : (
              <Pin className="text-muted-foreground" />
            )}
            <span>{isPinned ? "Unpinned" : "Pin"}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Archive className="text-muted-foreground" />
            <span>Archive</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Folder className="text-muted-foreground" />
              <span>Move to Project</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
                className="w-40"
              >
                <DropdownMenuItem>New Project</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>

      </DropdownMenu>
    </SidebarMenuItem>
  )
}