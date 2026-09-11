import type { ReactNode } from "react"

export function SettingRow({
  label,
  description,
  children,
}: {
  label: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="flex justify-between items-center gap-3 px-3 sm:px-4 py-3">
      <div className="min-w-0">
        <p className="font-medium text-sm">{label}</p>
        <p className="mt-1 text-muted-foreground text-xs">{description}</p>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  )
}
