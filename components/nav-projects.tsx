import { MoreHorizontal } from "lucide-react"

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
} from "@/components/ui/sidebar"

export function NavProjects({
  label = "Projects",
  projects,
}: {
  label?: string
  projects: {
    name: string
    emoji: React.ReactNode
    pages: {
      name: string
      emoji: React.ReactNode
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {projects.map((workspace) => (
            <NavProjectItem key={workspace.name} project={workspace} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export function NavProjectItem({
  project,
}: {
  project: {
    name: string
    emoji: React.ReactNode
    pages: { name: string; emoji: React.ReactNode }[]
  }
}) {
  return (
    <Collapsible>
      <SidebarMenuItem>
        <CollapsibleTrigger
          render={
            <SidebarMenuButton
              aria-label={`Toggle ${project.name}`}
              className="data-[state=open]:bg-sidebar-accent"
            />
          }
        >
          <span>{project.emoji}</span>
          <span>{project.name}</span>
        </CollapsibleTrigger>
        <SidebarMenuAction
          showOnHover
          aria-label={`More options for ${project.name}`}
        >
          <MoreHorizontal />
        </SidebarMenuAction>
        <CollapsibleContent>
          <SidebarMenuSub>
            {project.pages.map((page) => (
              <SidebarMenuSubItem key={page.name}>
                <SidebarMenuSubButton render={<a href="#" />}>
                  <span>{page.name}</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}
