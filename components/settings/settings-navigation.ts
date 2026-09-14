import {
  KeyRound,
  Settings,
  UserRound,
  Signature,
} from "lucide-react"

export type SettingsSection =
  | "General"
  | "Profile"
  | "Personalization"
  | "BYOK"

export type SettingsSectionItem = {
  label: SettingsSection
  icon: typeof Settings
}

export const settingsSections: SettingsSectionItem[] = [
  { label: "General", icon: Settings },
  { label: "Profile", icon: UserRound },
  { label: "Personalization", icon: Signature },
  { label: "BYOK", icon: KeyRound },
  // NOTE: The following sections are commented out for now, but can be added back in later if needed.
  // { label: "Language", icon: Globe },
  // { label: "Data controls", icon: Database },
  // { label: "Privacy & security", icon: ShieldCheck },
  // { label: "Help & support", icon: CircleHelp },
  // { label: "Notifications", icon: Bell },
  // { label: "Billing", icon: CreditCard },
  // { label: "Usage", icon: Database },
]
