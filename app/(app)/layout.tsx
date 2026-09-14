import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { MobileSidebarTrigger } from "@/components/sidebar/mobile-sidebar-trigger"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <MobileSidebarTrigger />
      <AppSidebar collapsible="icon" />
      <SidebarInset className="h-svh min-h-0 overflow-hidden">{children}</SidebarInset>
    </SidebarProvider>
  )
}