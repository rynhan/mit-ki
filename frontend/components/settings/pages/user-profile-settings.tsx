"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { updateUser } from "@/lib/auth-client"
import type { AuthUser } from "@/types/auth"

type UserProfileSettingsProps = {
  user: AuthUser
}

export function UserProfileSettings({
  user
}: UserProfileSettingsProps) {

  const [name, setName] = React.useState(user.name)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [success, setSuccess] = React.useState("")

  const router = useRouter()

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  async function handleSave() {
    const nextName = name.trim()

    if (nextName.length < 2) {
      setError("Name must be at least 2 characters")
      return
    }

    setLoading(true)
    setError("")
    setSuccess("")

    await updateUser(
      { name: nextName },
      {
        onSuccess: () => {
          setSuccess("Profile updated")
          router.refresh()
        },
        onError: ({ error }) => {
          setError(error.message)
        },
        onResponse: () => {
          setLoading(false)
        },
      },
    )
  }
  return (
    <div className="space-y-6">

      <section className="flex items-center gap-4">
        <Avatar className="rounded-full size-16">
          <AvatarImage src={user.image ?? undefined} alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">Profile photo</h3>
          <p className="text-muted-foreground text-xs">Use a clear image to personalize your account.</p>
          <Button variant="outline" size="sm" className="mt-2 hover:cursor-pointer">Change photo</Button>
        </div>
      </section>

      <div className="space-y-3 p-3 sm:p-4 border rounded-xl">

        <div className="space-y-2">
          <label htmlFor="profile-name" className="font-medium text-sm">
            Name
          </label>
          <Input
            id="profile-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="profile-email" className="font-medium text-sm">
            Email
          </label>
          <Input
            id="profile-email"
            type="email"
            value={user.email}
            disabled
          />
        </div>

        <div className="flex justify-between items-center gap-4 pt-2">
          <div aria-live="polite" className="min-w-0 text-sm">
            {error && <p className="text-destructive">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
          </div>

          <Button
            type="button"
            onClick={handleSave}
            disabled={loading || !name.trim() || name.trim() === user.name}
            className="hover:cursor-pointer"
          >
            {loading ? "Saving…" : "Save changes"}
          </Button>
        </div>
      </div>

    </div>
  )
}
