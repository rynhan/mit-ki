"use client"

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
import * as React from "react"

export function NavThreads({
  label = "Chats",
  threads,
}: {
  label?: string
  threads: SidebarThread[]
}) {
  const { isMobile } = useSidebar()
  const [sortBy, setSortBy] = React.useState("last-active")
  const sortedThreads = [...threads].sort((a, b) => {
    const aValue = sortBy === "created-at" ? a.createdAt : a.lastActiveAt
    const bValue = sortBy === "created-at" ? b.createdAt : b.lastActiveAt
    return (bValue ?? 0) - (aValue ?? 0)
  })

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden text-sm">
      <Collapsible defaultOpen>
        <div className="group/section relative">
          <CollapsibleTrigger
            className="justify-start hover:bg-transparent w-full font-semibold text-muted-foreground hover:text-muted-foreground text-sm"
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
          <div className="top-2.5 right-3 absolute flex items-center gap-1">
            <button
              type="button"
              aria-label="New chat"
              className="flex justify-center items-center hover:bg-transparent opacity-0 focus-visible:opacity-100 group-focus-within/section:opacity-100 group-hover/section:opacity-100 rounded-md focus-visible:ring-2 size-5 text-muted-foreground hover:text-muted-foreground transition-opacity"
            >
              <SquarePen className="stroke-[1.5] size-4" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button
                    type="button"
                    aria-label="Filter chats"
                    className="flex justify-center items-center hover:bg-transparent opacity-0 focus-visible:opacity-100 group-focus-within/section:opacity-100 group-hover/section:opacity-100 rounded-md focus-visible:ring-2 size-5 text-muted-foreground hover:text-muted-foreground transition-opacity"
                  />
                }
              >
                <ListFilter className="stroke-[1.5] size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-36">
                <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
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
            {sortedThreads.map((item) => (
              <NavThreadItem key={item.name} thread={item} isMobile={isMobile} />
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