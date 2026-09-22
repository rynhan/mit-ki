import { headers } from "next/headers"
import { redirect } from "next/navigation"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { MobileSidebarTrigger } from "@/components/sidebar/mobile-sidebar-trigger"
import { auth } from "@/lib/auth"

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect("/sign-in")
  }

  return (
    <SidebarProvider>
      <MobileSidebarTrigger />
      <AppSidebar user={session.user} collapsible="icon" />
      <SidebarInset className="h-svh min-h-0 overflow-hidden">
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}