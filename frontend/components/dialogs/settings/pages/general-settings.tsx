import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SettingRow } from "@/components/dialogs/settings/setting-row"

const appearanceOptions = [
  { label: "System", value: "system" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
]

const languageOptions = [
  { label: "Auto-detect", value: "auto" },
  { label: "English", value: "en" },
  { label: "Bahasa Indonesia", value: "id" },
  { label: "Nederlands", value: "nl" },
]

export function GeneralSettings() {
  return (
    <div className="border rounded-xl divide-y">

      <SettingRow label="Appearance" description="Choose the theme for the application.">
        <Select defaultValue="system" items={appearanceOptions}>
          <SelectTrigger size="sm" className="bg-background py-3 w-36 hover:cursor-pointer">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {appearanceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value} className="hover:cursor-pointer">
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SettingRow>

      <SettingRow label="Language" description="Select the language you prefer to use.">
        <Select defaultValue="auto" items={languageOptions}>
          <SelectTrigger size="sm" className="bg-background py-3 w-36 hover:cursor-pointer">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value} className="hover:cursor-pointer">
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SettingRow>

    </div>
  )
}
