"use client"

import Link from "next/link"
import {
  Archive,
  ChevronDown,
  ChevronRight,
  Folder,
  FolderPlus,
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import type { SidebarProject, SidebarThread } from "@/data/sidebar"

export function NavProjects({
  label = "Projects",
  projects,
}: {
  label?: string
  projects: SidebarProject[]
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
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
            {label}
            <ChevronRight className="group-data-open/section:hidden stroke-[1.5]" />
            <ChevronDown className="hidden group-data-open/section:block stroke-[1.5]" />
          </CollapsibleTrigger>
          <button
            type="button"
            aria-label={`Add ${label}`}
            className="top-1/2 right-2 absolute flex justify-center items-center opacity-0 focus-visible:opacity-100 group-hover/section:opacity-100 rounded-md focus-visible:ring-2 size-5 text-muted-foreground hover:text-muted-foreground transition-opacity -translate-y-1/2 cursor-pointer"
          >
            <FolderPlus className="stroke-[1.5] hover:stroke-2 size-4" />
          </button>
        </div>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((workspace) => (
                <NavProjectItem key={workspace.name} project={workspace} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
    </SidebarGroup>
  )
}

export function NavProjectItem({
  project,
  isPinned = false,
}: {
  project: SidebarProject
  isPinned?: boolean
}) {
  const { isMobile } = useSidebar()

  return (
    <Collapsible>
      <SidebarMenuItem>
        <CollapsibleTrigger
          render={
            <SidebarMenuButton
              aria-label={`Toggle ${project.name}`}
              className="data-[state=open]:bg-sidebar-accent text-sm cursor-pointer"
            />
          }
        >
          <span>{project.emoji}</span>
          <span>{project.name}</span>
        </CollapsibleTrigger>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuAction
                // {/* Show the parent action only when the parent row is hovered or focused. */}
                className="opacity-0 aria-expanded:opacity-100 md:opacity-0 hover:opacity-100 peer-hover/menu-button:opacity-100 cursor-pointer"
                aria-label={`Actions for ${project.name}`}
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
              <span>Edit details</span>
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
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <CollapsibleContent>
          <SidebarMenuSub
            // {/* Remove the submenu's default right spacing to align child rows with the parent. */}
            className="mr-0 pr-0"
          >
            {project.pages.map((page) => (
              <NavProjectPageItem
                key={page.name}
                page={page}
                isMobile={isMobile}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

function NavProjectPageItem({
  page,
  isMobile,
}: {
  page: SidebarThread
  isMobile: boolean
}) {
  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton
        render={<Link href={page.url} title={page.name} aria-label={page.name} />}
        // {/* Reserve room for the action button and... 
        className="pr-8 w-full text-sm cursor-pointer"
      >
        <span
          // ...truncate long page names with an ellipsis. */}
          className="min-w-0 text-sm truncate"
        >
          {page.name}
        </span>
      </SidebarMenuSubButton>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <SidebarMenuAction
              // {/* Keep child actions scoped to the hovered or focused child row. */}
              className="top-1 opacity-0 aria-expanded:opacity-100 md:opacity-0 hover:opacity-100 group-hover/menu-sub-item:opacity-100 cursor-pointer"
              aria-label={`Actions for ${page.name}`}
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
            <Pin className="text-muted-foreground" />
            <span>Pin</span>
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
              <DropdownMenuSubContent className="w-40">
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
    </SidebarMenuSubItem>
  )
}
