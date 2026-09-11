import { Clock7, ImagesIcon, LibraryBig, SquarePen } from "lucide-react"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const mainItems = [
  { label: "New Chat", icon: SquarePen },
  { label: "Images", icon: ImagesIcon },
  { label: "Library", icon: LibraryBig },
  { label: "Scheduled", icon: Clock7 },
]

export function NavMain() {
  return (
    <SidebarGroup className="px-0 py-0">
      <SidebarMenu>
        {mainItems.map(({ label, icon: Icon }) => (
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
    </SidebarGroup>
  )
}
