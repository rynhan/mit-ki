import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { SettingRow } from "@/components/settings/setting-row"

const responseStyleOptions = [
  { label: "Balanced", value: "balanced" },
  { label: "Concise", value: "concise" },
  { label: "Detailed", value: "detailed" },
]

export function PersonalizationSettings() {
  return (
    <div className="border rounded-xl divide-y">

      <SettingRow label="Response style" description="Choose how the assistant should communicate with you.">
        <Select defaultValue="balanced" items={responseStyleOptions}>
          <SelectTrigger size="sm" className="bg-background py-3 w-36 hover:cursor-pointer">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {responseStyleOptions.map((option) => (
              <SelectItem key={option.value} value={option.value} className="hover:cursor-pointer">
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SettingRow>

      <SettingRow label="Memory" description="Allow the assistant to remember useful preferences between chats.">
        <Switch defaultChecked className="hover:cursor-pointer" />
      </SettingRow>

      <SettingRow label="Suggested prompts" description="Show helpful suggestions when starting a new chat.">
        <Switch defaultChecked className="hover:cursor-pointer" />
      </SettingRow>

    </div>
  )
}
