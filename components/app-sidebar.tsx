"use client"

import * as React from "react"

import { sidebarData } from "@/data/sidebar"
import { userProfileData } from "@/data/user-profile"
import { NavBrand } from "@/components/nav-brand"
import { NavMain } from "@/components/nav-main"
import { NavPinned } from "@/components/nav-pinned"
import { NavProjects } from "./nav-projects"
import { NavThreads } from "@/components/nav-threads"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader className="gap-3">
        <NavBrand />
        <NavMain />
      </SidebarHeader>
      <SidebarContent className="gap-2">
        <NavPinned pinned={sidebarData.pinned} />
        <NavProjects label="Projects" projects={sidebarData.projects} />
        <NavThreads label="Chats" threads={sidebarData.threads} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userProfileData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
