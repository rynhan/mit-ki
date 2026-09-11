"use client"

import Image from "next/image"
import { PanelLeft, Search } from "lucide-react"

export function SidebarBrand() {
  return (
    <div className="flex justify-between items-center px-1 pt-1 w-full">
      <Image
        src="/mit-kai-von-kleki.png"
        alt="Mit-KAI"
        width={28}
        height={28}
        className="rounded-full size-7 object-cover"
      />
      <div className="flex items-center gap-1 text-muted-foreground">
        <button
          type="button"
          aria-label="Search"
          className="flex justify-center items-center hover:bg-sidebar-accent rounded-md size-8 hover:text-muted-foreground"
        >
          <Search className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Toggle sidebar"
          className="flex justify-center items-center hover:bg-sidebar-accent rounded-md size-8 hover:text-muted-foreground"
        >
          <PanelLeft className="size-4" />
        </button>
      </div>
    </div>
  )
}
