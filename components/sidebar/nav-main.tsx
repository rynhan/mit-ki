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

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const expandedItems = [
  { label: "New Chat", icon: SquarePen },
  { label: "Images", icon: ImagesIcon },
  { label: "Library", icon: LibraryBig },
  { label: "Scheduled", icon: Clock7 },
]

const collapsedItems = [
  { label: "New Chat", icon: SquarePen },
  { label: "Search", icon: Search },
  { label: "Pinned", icon: Pin },
  { label: "Projects", icon: Folder },
  { label: "Chats", icon: MessageCircle },
]

export function NavMain() {
  return (
    <SidebarGroup className="px-0 py-0">

      {/* Expanded menu */}
      <SidebarMenu className="group-data-[collapsible=icon]:hidden">
        {expandedItems.map(({ label, icon: Icon }) => (
          <SidebarMenuItem key={label}>
            <SidebarMenuButton
              render={<a href="#" aria-label={label} />}
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
        {collapsedItems.map(({ label, icon: Icon }) => (
          <SidebarMenuItem key={label}>
            <SidebarMenuButton
              render={<a href="#" aria-label={label} />}
              className="text-sm cursor-pointer"
            >
              <Icon />
              <span className="sr-only">{label}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

    </SidebarGroup>
  )
}
