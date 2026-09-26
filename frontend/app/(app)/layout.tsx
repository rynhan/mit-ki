import { headers } from "next/headers"
import { redirect } from "next/navigation"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
// Client wrapper required: this layout is a Server Component (auth session check below), and Next.js forbids `dynamic(..., { ssr: false })` here.
// See mobile-sidebar-trigger-loader.tsx for details.
import { MobileSidebarTriggerLoader } from "@/components/sidebar/mobile-sidebar-trigger-loader"
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
      <MobileSidebarTriggerLoader />
      <AppSidebar user={session.user} collapsible="icon" />
      <SidebarInset className="h-svh min-h-0 overflow-hidden">
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}