import { NavProjectItem } from "@/components/nav-projects"
import { NavThreadItem } from "@/components/nav-threads"
import type { SidebarPinnedItem } from "@/data/sidebar"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavPinned({ pinned }: { pinned: SidebarPinnedItem[] }) {

  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>
        Pinned
      </SidebarGroupLabel>
      <SidebarMenu>
        {pinned.map((item) =>
          item.type === "thread" ? (
            <NavThreadItem key={item.id} thread={item.thread} isMobile={isMobile} />
          ) : (
            <NavProjectItem key={item.id} project={item.project} />
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
