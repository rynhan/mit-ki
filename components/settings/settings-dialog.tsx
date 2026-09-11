"use client"

import * as React from "react"
import { Bot, X } from "lucide-react"
import Image from "next/image"

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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"
import { GeneralSettings } from "@/components/settings/pages/general-settings"
import {
  ByokProviderSettings,
  ByokSettings,
  byokProviders,
  customProviderDescription,
  type ByokProvider,
} from "@/components/settings/pages/byok-settings"
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
  const [activeProvider, setActiveProvider] = React.useState<ByokProvider | null>(null)

  const settingsPages: Partial<Record<SettingsSection, React.ComponentType>> = {
    General: GeneralSettings,
    Profile: UserProfileSettings,
    Personalization: PersonalizationSettings,
  }
  const ActivePage = settingsPages[activeSection]
  const providerMetadata = activeProvider === "Custom provider"
    ? { description: customProviderDescription, image: "" }
    : byokProviders.find((provider) => provider.name === activeProvider)

  function selectSection(section: SettingsSection) {
    setActiveSection(section)
    setActiveProvider(null)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent
        showCloseButton={false}
        className="gap-0 p-0 w-[calc(100vw-1rem)] sm:w-[min(720px,calc(100vw-1rem))] lg:w-[min(720px,calc(100vw-2rem))] max-w-none! h-[calc(100vh-1rem)] sm:h-[min(600px,calc(100vh-2rem))] overflow-hidden"
      >
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">Manage your account and application preferences.</DialogDescription>
        <div className="flex sm:flex-row flex-col h-full min-h-0">

          <aside className="flex flex-col bg-muted/25 sm:border-r border-b sm:border-b-0 w-full sm:w-56 shrink-0">
            <div className="flex items-center px-3 h-16 shrink-0">
              <Input
                placeholder="Search settings"
                aria-label="Search settings"
                className="bg-background px-3 h-9"
              />
            </div>
            {/* Settings navigation */}
            <ScrollArea className="hidden sm:block flex-1 min-h-0">
              <nav className="space-y-0 px-3 pb-4" aria-label="Settings sections">
                {settingsSections.map((section) => {
                  const Icon = section.icon
                  const isActive = activeSection === section.label
                  return (
                    <button
                      key={section.label}
                      type="button"
                      onClick={() => selectSection(section.label)}
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

          <section className="flex flex-col flex-1 min-w-0 min-h-0">
            <header className="flex justify-between items-center pr-2.5 pl-5 h-16 shrink-0">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink render={<span />}>Settings</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {activeProvider ? (
                      <BreadcrumbLink
                        render={<button type="button" onClick={() => setActiveProvider(null)} />}
                      >
                        {activeSection}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{activeSection}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {activeProvider && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{activeProvider}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
              <DialogClose
                render={<Button variant="ghost" size="icon" className="rounded-full size-8 hover:cursor-pointer" />}
                aria-label="Close settings"
              >
                <X className="size-4" />
              </DialogClose>
            </header>
            <ScrollArea className="flex-1 min-h-0">
              <main className="mx-auto px-5 max-w-3xl text-[14px]">
                <div className="mb-6">
                  <h2 className="flex items-center gap-2 font-semibold text-xl tracking-tight">
                    {activeProvider && activeProvider !== "Custom provider" && (
                      <span className="relative flex justify-center items-center size-5 shrink-0">
                        {providerMetadata?.image ? (
                          <Image
                            src={providerMetadata.image}
                            alt={`${activeProvider} logo`}
                            width={20}
                            height={20}
                            className="size-full object-contain"
                          />
                        ) : (
                          <Bot className="size-5" />
                        )}
                      </span>
                    )}
                    {activeProvider ?? activeSection}
                  </h2>
                  <p className="mt-1 text-muted-foreground text-xs">
                    {activeProvider
                      ? providerMetadata?.description
                      : "Customize how your workspace looks and behaves."}
                  </p>
                </div>
                {activeProvider ? (
                  <ByokProviderSettings provider={activeProvider} />
                ) : activeSection === "BYOK" ? (
                  <ByokSettings onSelectProvider={setActiveProvider} />
                ) : ActivePage ? <ActivePage /> : (
                  <section className="p-5 border rounded-xl">
                    <p className="text-muted-foreground text-sm">
                      Settings for {activeSection.toLowerCase()} will appear here.
                    </p>
                  </section>
                )}
              </main>
            </ScrollArea>
          </section>

        </div>
      </DialogContent>

    </Dialog>
  )
}
