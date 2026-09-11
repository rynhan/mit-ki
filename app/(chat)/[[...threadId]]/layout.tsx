import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { MobileSidebarTrigger } from "@/components/mobile-sidebar-trigger"



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <MobileSidebarTrigger />
      <AppSidebar collapsible="icon" />
      <SidebarInset className="overflow-hidden">
        {children}
      </SidebarInset>

    </SidebarProvider>
  )
}