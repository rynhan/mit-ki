"use client"

import {
  ArrowUpRight,
  Link,
  MoreHorizontal,
  StarOff,
  Trash2,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
      <SidebarGroupLabel>
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
}: {
  thread: SidebarThread
  isMobile: boolean
}) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        render={
          <a href={thread.url} title={thread.name} aria-label={thread.name} />
        }
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
      </DropdownMenu>
    </SidebarMenuItem>
  )
}
