import {
  Clock7,
  Folder,
  ImagesIcon,
  LibraryBig,
  MessageCircle,
  Pin,
  Search,
  SquarePen,
} from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { sidebarData } from "@/data/sidebar"
import { SearchDialog } from "@/components/search/search-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const expandedItems = [
  { label: "New Chat", href: "/", icon: SquarePen },
  { label: "Images", href: "/images", icon: ImagesIcon },
  { label: "Library", href: "/library", icon: LibraryBig },
  { label: "Scheduled", href: "/scheduled", icon: Clock7 },
]

export function NavMain() {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="px-0 py-0">

      {/* Expanded menu */}
      <SidebarMenu className="group-data-[collapsible=icon]:hidden">
        {expandedItems.map(({ label, href, icon: Icon }) => (
          <SidebarMenuItem key={label}>
            <SidebarMenuButton
              render={<Link href={href} aria-label={label} prefetch />}
              className="text-sm cursor-pointer"
            >
              <Icon />
              <span>{label}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      {/* Collapsed (icon rail) menu */}
      <SidebarMenu className="hidden group-data-[collapsible=icon]:block">
        <SidebarMenuItem>
          <SidebarMenuButton
            render={<Link href="/" aria-label="New Chat" prefetch />}
            className="text-sm cursor-pointer"
          >
            <SquarePen />
            <span className="sr-only">New Chat</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SearchDialog
            trigger={
              <SidebarMenuButton aria-label="Search" className="text-sm cursor-pointer">
                <Search />
                <span className="sr-only">Search</span>
              </SidebarMenuButton>
            }
          />
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarDropdown
            label="Pinned"
            icon={Pin}
            isMobile={isMobile}
          >
              {sidebarData.pinned.slice(0, 10).map((item) => (
              <DropdownMenuItem
                key={item.id}
                className="px-3 py-2 text-sm cursor-pointer"
                render={<Link href={item.type === "thread" ? item.thread.url : "#"} />}
              >
                {item.type === "project" ? item.project.emoji : <></>}
                <span className="truncate">{item.type === "project" ? item.project.name : item.thread.name}</span>
              </DropdownMenuItem>
            ))}
          </SidebarDropdown>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarDropdown
            label="Projects"
            icon={Folder}
            isMobile={isMobile}
          >
            {sidebarData.projects.slice(0, 10).map((project) => (
              <DropdownMenuItem key={project.name} className="px-3 py-2 text-sm cursor-pointer">
                <span>{project.emoji}</span>
                <span>{project.name}</span>
              </DropdownMenuItem>
            ))}
          </SidebarDropdown>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarDropdown
            label="Recents"
            icon={MessageCircle}
            isMobile={isMobile}
          >
            {sidebarData.threads.slice(0, 10).map((thread) => (
              <DropdownMenuItem
                key={thread.name}
                className="px-3 py-2 text-sm cursor-pointer"
                render={<Link href={thread.url} />}
              >
                <span className="truncate">{thread.name}</span>
              </DropdownMenuItem>
            ))}
          </SidebarDropdown>
        </SidebarMenuItem>
      </SidebarMenu>

    </SidebarGroup>
  )
}

function SidebarDropdown({
  label,
  icon: Icon,
  isMobile,
  children,
}: {
  label: string
  icon: React.ElementType
  isMobile: boolean
  children: React.ReactNode
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <SidebarMenuButton aria-label={label} className="text-sm cursor-pointer" />
        }
      >
        <Icon />
        <span className="sr-only">{label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 max-w-[calc(100vw-1rem)]"
        side={isMobile ? "bottom" : "right"}
        align={isMobile ? "end" : "start"}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-3 py-2 text-sm">{label}</DropdownMenuLabel>
          {children}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

