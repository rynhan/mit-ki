"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

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
import { SettingsDialog } from "@/components/dialogs/settings/settings-dialog"
import type { SettingsSection } from "@/components/dialogs/settings/settings-navigation"
import { signOut } from "@/lib/auth-client"
import type { AuthUser } from "@/types/auth"

export function NavUser({
  user,
}: {
  user: AuthUser
}) {

  const { isMobile } = useSidebar()
  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const [settingsSection, setSettingsSection] = React.useState<SettingsSection>("General")

  function openSettings(section: SettingsSection) {
    setSettingsSection(section)
    setSettingsOpen(true)
  }

  const router = useRouter()

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

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
              <AvatarImage src={user.image ?? undefined} alt={user.name} />
              <AvatarFallback className="rounded-full">{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 grid text-sm text-left leading-tight">
              <span className="font-medium truncate">{user.name}</span>
              <span className="text-xs truncate">{user.email}</span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-64 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>

              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-sm text-left">
                  <Avatar className="rounded-full w-8 h-8">
                    <AvatarImage src={user.image ?? undefined} alt={user.name} />
                    <AvatarFallback className="rounded-full">{initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid text-sm text-left leading-tight">
                    <span className="font-medium truncate">{user.name}</span>
                    <span className="text-xs truncate">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="px-3 py-1.5 text-sm cursor-pointer"
              >
                <Sparkle />
                Upgrade to Pro
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="px-3 py-1.5 text-sm cursor-pointer"
                onClick={() => openSettings("Profile")}
              >
                <CircleUserRound />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="px-3 py-1.5 text-sm cursor-pointer"
                onClick={() => openSettings("Personalization")}
              >
                <Signature />
                Personalization
              </DropdownMenuItem>
              <DropdownMenuItem
                className="px-3 py-1.5 text-sm cursor-pointer"
                onClick={() => openSettings("General")}
              >
                <Settings />
                Settings
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="px-3 py-1.5 text-sm cursor-pointer"
                onClick={async () => {
                  await signOut({
                    fetchOptions: {
                      onSuccess: () => router.push("/sign-in"),
                    },
                  })
                }}
              >
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
        user={user}
      />

    </SidebarMenu>
  )
}
