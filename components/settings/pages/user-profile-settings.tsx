import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { userProfileData } from "@/data/user-profile"

export function UserProfileSettings() {
  return (
    <div className="space-y-6">

      <section className="flex items-center gap-4">
        <Avatar className="rounded-full size-16">
          <AvatarImage src={userProfileData.avatar} alt={userProfileData.name} />
          <AvatarFallback>{userProfileData.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">Profile photo</h3>
          <p className="text-muted-foreground text-xs">Use a clear image to personalize your account.</p>
          <Button variant="outline" size="sm" className="mt-2 hover:cursor-pointer">Change photo</Button>
        </div>
      </section>

      <div className="space-y-3 p-3 sm:p-4 border rounded-xl">
        <div className="space-y-2"><label htmlFor="profile-name" className="font-medium text-sm">Name</label><Input id="profile-name" defaultValue={userProfileData.name} /></div>
        <div className="space-y-2"><label htmlFor="profile-email" className="font-medium text-sm">Email</label><Input id="profile-email" type="email" defaultValue={userProfileData.email} /></div>
        <Button className="hover:cursor-pointer">Save changes</Button>
      </div>

    </div>
  )
}
