"use client"

import * as React from "react"
import {
  CircleUserRound,
  Signature,
  Settings,
  LogOut,
  Sparkle,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import type { UserProfile } from "@/data/user-profile"
import { SettingsDialog } from "@/components/settings/settings-dialog"
import type { SettingsSection } from "@/components/settings/settings-navigation"

export function NavUser({
  user,
}: {
  user: UserProfile
}) {

  const { isMobile } = useSidebar()
  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const [settingsSection, setSettingsSection] = React.useState<SettingsSection>("General")

  function openSettings(section: SettingsSection) {
    setSettingsSection(section)
    setSettingsOpen(true)
  }

  return (
    <SidebarMenu className="w-full">

      <SidebarMenuItem className="w-full">
        <DropdownMenu>

          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent w-full data-[state=open]:text-sidebar-accent-foreground hover:cursor-pointer"
              />
            }
          >
            <Avatar className="rounded-full w-8 h-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">SC</AvatarFallback>
            </Avatar>
            <div className="flex-1 grid text-sm text-left leading-tight">
              <span className="font-medium truncate">{user.name}</span>
              <span className="text-xs truncate">{user.email}</span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>

              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-sm text-left">
                  <Avatar className="rounded-full w-8 h-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">SC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid text-sm text-left leading-tight">
                    <span className="font-medium truncate">{user.name}</span>
                    <span className="text-xs truncate">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="hover:cursor-pointer"
              >
                <Sparkle />
                Upgrade to Pro
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => openSettings("Profile")}
              >
                <CircleUserRound />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => openSettings("Personalization")}
              >
                <Signature />
                Personalization
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => openSettings("General")}
              >
                <Settings />
                Settings
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="hover:cursor-pointer">
                <LogOut />
                Log out
              </DropdownMenuItem>

            </DropdownMenuGroup>
          </DropdownMenuContent>

        </DropdownMenu>
      </SidebarMenuItem>

      <SettingsDialog
        key={`${settingsSection}-${settingsOpen}`}
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        initialSection={settingsSection}
      />

    </SidebarMenu>
  )
}
