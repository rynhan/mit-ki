"use client"

import Image from "next/image"
import { PanelLeft, PanelRight, Search } from "lucide-react"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavBrand() {

  const { toggleSidebar } = useSidebar()

  return (
    <SidebarGroup className="px-0 py-0">

      {/* Expanded brand */}
      <SidebarMenu className="group-data-[collapsible=icon]:hidden">
        <SidebarMenuItem className="h-9">
          <div
            className="group/brand relative flex justify-between items-center pr-0 pl-1 w-full h-9"
            data-sidebar="menu-label"
          >
            <Image
              src="/mit-kai-von-kleki.png"
              alt="Mit-KAI"
              width={28}
              height={28}
              className="rounded-full size-7 object-cover shrink-0"
            />
            <div className="flex items-center gap-1 text-muted-foreground">
              <button
                type="button"
                aria-label="Search"
                className="flex justify-center items-center hover:bg-sidebar-accent rounded-md size-8 hover:text-muted-foreground"
              >
                <Search className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Collapse sidebar"
                onClick={toggleSidebar}
                className="flex justify-center items-center hover:bg-sidebar-accent rounded-md size-8"
              >
                <PanelLeft className="size-4" />
              </button>
            </div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Collapsed brand */}
      <SidebarMenu className="hidden group-data-[collapsible=icon]:block">
        <SidebarMenuItem className="h-9">
          <SidebarMenuButton
            render={<button type="button" aria-label="Expand sidebar" onClick={toggleSidebar} />}
            className="justify-center hover:bg-sidebar-accent group-data-[collapsible=icon]:p-0! h-9 text-primary hover:text-primary"
          >
            <Image
              src="/mit-kai-von-kleki.png"
              alt="Mit-KAI"
              width={28}
              height={28}
              className="group-hover:hidden rounded-full size-7 object-cover shrink-0"
            />
            <PanelRight className="hidden group-hover:block size-4" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

    </SidebarGroup>
  )
}
