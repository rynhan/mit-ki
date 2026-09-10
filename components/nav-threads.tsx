"use client"

import {
  Archive,
  Folder,
  MoreHorizontal,
  Pencil,
  Pin,
  PinOff,
  Trash,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

export function NavThreads({
  label = "Chats",
  threads,
}: {
  label?: string
  threads: SidebarThread[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="font-semibold text-muted-foreground text-sm">
        {label}
      </SidebarGroupLabel>
      <SidebarMenu>
        {threads.map((item) => (
          <NavThreadItem key={item.name} thread={item} isMobile={isMobile} />
        ))}
      </SidebarMenu>
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
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        render={
          <a href={thread.url} title={thread.name} aria-label={thread.name} />
        }
        className="text-sm"
      >
        <span>{thread.name}</span>
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <SidebarMenuAction showOnHover aria-label={`Actions for ${thread.name}`} />
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
