"use client"

import dynamic from "next/dynamic"

// Why this wrapper exists:
// 1. The trigger renders a `md:hidden` button whose state comes from
//    `useSidebar` (browser-only). Rendering it on the server caused a
//    hydration mismatch (server output differed from the client's first
//    render), so it must be loaded with `ssr: false`.
// 2. Next.js 16 does not allow `dynamic(..., { ssr: false })` inside Server
//    Components. The authenticated layout (app/(app)/layout.tsx) is a Server
//    Component because it resolves the Better Auth session, so this Client
//    Component boundary owns the no-SSR dynamic import instead.
// Do not inline this dynamic import into the layout — the build will fail.
const MobileSidebarTrigger = dynamic(
  () =>
    import("@/components/sidebar/mobile-sidebar-trigger").then(
      (module) => module.MobileSidebarTrigger,
    ),
  { ssr: false },
)

export function MobileSidebarTriggerLoader() {
  return <MobileSidebarTrigger />
}
