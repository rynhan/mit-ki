"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
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
    <SidebarGroup className="group-data-[collapsible=icon]:hidden mt-1.5">
      <Collapsible defaultOpen className="group/section">
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
          Pinned
          <ChevronRight className="group-data-open/section:hidden stroke-[1.5]" />
          <ChevronDown className="hidden group-data-open/section:block stroke-[1.5]" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenu>
            {pinned.map((item) =>
              item.type === "thread" ? (
                <NavThreadItem
                  key={item.id}
                  thread={item.thread}
                  isMobile={isMobile}
                  isPinned
                />
              ) : (
                <NavProjectItem
                  key={item.id}
                  project={item.project}
                  isPinned
                />
              )
            )}
          </SidebarMenu>
        </CollapsibleContent>
      </Collapsible>
    </SidebarGroup>
  )
}
