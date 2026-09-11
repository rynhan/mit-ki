"use client"

import { ListSortDescending } from "lucide-react"

import { useSidebar } from "@/components/ui/sidebar"

export function MobileSidebarTrigger() {
  const { setOpenMobile } = useSidebar()

  return (
    <button
      type="button"
      aria-label="Open sidebar"
      onClick={() => setOpenMobile(true)}
      className="md:hidden top-3 left-3 z-40 fixed flex justify-center items-center bg-background/80 hover:bg-accent shadow-sm backdrop-blur border rounded-lg size-9 text-foreground/70 hover:text-foreground"
    >
      <ListSortDescending className="size-4" />
    </button>
  )
}
