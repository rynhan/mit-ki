"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { GeneralSettings } from "@/components/settings/pages/general-settings"
import { PersonalizationSettings } from "@/components/settings/pages/personalization-settings"
import { UserProfileSettings } from "@/components/settings/pages/user-profile-settings"
import { settingsSections, type SettingsSection } from "@/components/settings/settings-navigation"

export function SettingsDialog({
  open,
  onOpenChange,
  initialSection = "General",
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialSection?: SettingsSection
}) {

  const [activeSection, setActiveSection] = React.useState<SettingsSection>(initialSection)

  const settingsPages: Partial<Record<SettingsSection, React.ComponentType>> = {
    General: GeneralSettings,
    Profile: UserProfileSettings,
    Personalization: PersonalizationSettings,
  }
  const ActivePage = settingsPages[activeSection]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent
        showCloseButton={false}
        // {/* Use nearly the full viewport on small screens; cap both dimensions at 720px/600px from sm upward. */}
        className="gap-0 p-0 w-[calc(100vw-1rem)] sm:w-[min(720px,calc(100vw-1rem))] lg:w-[min(720px,calc(100vw-2rem))] max-w-none! h-[calc(100vh-1rem)] sm:h-[min(600px,calc(100vh-2rem))] overflow-hidden"
      >
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">Manage your account and application preferences.</DialogDescription>
        <div className="flex sm:flex-row flex-col h-full min-h-0">

          <aside className="bg-muted/25 sm:border-r border-b sm:border-b-0 w-full sm:w-56 shrink-0">
            {/* X Button */}
            <div className="flex justify-between items-center px-2 h-12 sm:h-12">
              <DialogClose render={<Button variant="ghost" size="icon" className="rounded-full size-8 hover:cursor-pointer" />}>
                <X className="size-4" />
              </DialogClose>
            </div>
            {/* Search bar */}
            <div className="px-3 pb-3">
              <Input placeholder="Search settings" className="bg-background px-3 h-9" />
            </div>
            {/* Settings navigation */}
            <ScrollArea className="hidden sm:block h-[calc(100%-112px)]">
              <nav className="space-y-0 px-3 pb-4" aria-label="Settings sections">
                {settingsSections.map((section) => {
                  const Icon = section.icon
                  const isActive = activeSection === section.label
                  return (
                    <button
                      key={section.label}
                      type="button"
                      onClick={() => setActiveSection(section.label)}
                      className={cn(
                        "flex items-center gap-3 hover:bg-accent px-3 py-2 rounded-lg w-full text-sm text-left transition-colors hover:cursor-pointer",
                        isActive && "bg-accent font-medium",
                      )}
                    >
                      <Icon className="size-4 shrink-0" />
                      <span>{section.label}</span>
                    </button>
                  )
                })}
              </nav>
            </ScrollArea>
          </aside>

          <ScrollArea className="flex-1 min-w-0 min-h-0">
            <main className="mx-auto p-5 sm:p-8 max-w-3xl text-[14px]">
              {/* Settings page heading */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="font-semibold text-xl tracking-tight">
                    {activeSection}
                  </h2>
                  <p className="mt-1 text-muted-foreground text-xs">
                    Customize how your workspace looks and behaves.
                  </p>
                </div>
              </div>
              {/* Settings page content */}
              {ActivePage ? <ActivePage /> : (
                <section className="p-5 border rounded-xl">
                  <p className="text-muted-foreground text-sm">
                    Settings for {activeSection.toLowerCase()} will appear here.
                  </p>
                </section>
              )}
            </main>
          </ScrollArea>

        </div>
      </DialogContent>

    </Dialog>
  )
}
