"use client"

import * as React from "react"

import { sidebarData } from "@/data/sidebar"
import { SidebarBrand } from "@/components/sidebar-brand"
import { NavMain } from "@/components/nav-main"
import { NavPinned } from "@/components/nav-pinned"
import { NavProjects } from "./nav-projects"
import { NavThreads } from "@/components/nav-threads"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader className="gap-3">
        <SidebarBrand />
        <NavMain />
      </SidebarHeader>
      <SidebarContent>
        <NavPinned pinned={sidebarData.pinned} />
        <NavProjects label="Projects" projects={sidebarData.projects} />
        <NavThreads label="Chats" threads={sidebarData.threads} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
