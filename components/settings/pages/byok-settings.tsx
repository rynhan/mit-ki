"use client"

import { ArrowRight, Plus } from "lucide-react"
import Image from "next/image"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export const byokProviders = [
  { name: "OpenRouter", description: "Configure your OpenRouter credentials.", image: "/images/providers/openrouter.png" },
  { name: "OpenAI", description: "Configure your OpenAI credentials.", image: "/images/providers/openai.png" },
  { name: "Anthropic", description: "Configure your Anthropic credentials.", image: "/images/providers/claude-color.png" },
] as const

export type ByokProvider = (typeof byokProviders)[number]["name"]
  | "Custom provider"

export const customProviderDescription = "Connect a compatible OpenAI-style provider."

export function ByokSettings({
  onSelectProvider,
}: {
  onSelectProvider: (provider: ByokProvider) => void
}) {
  return (
    <div className="border rounded-xl divide-y">
      {byokProviders.map((provider) => (
        <button
          key={provider.name}
          type="button"
          className="flex items-center gap-3 hover:bg-muted/50 px-4 py-3 w-full text-left transition-colors hover:cursor-pointer"
          onClick={() => onSelectProvider(provider.name)}
        >
          <span className="relative flex justify-center items-center size-7 shrink-0">
            <Image
              src={provider.image}
              alt={`${provider.name} logo`}
              width={32}
              height={32}
              className="size-full object-contain"
            />
          </span>
          <span className="flex-1 min-w-0">
            <span className="block font-medium text-sm">{provider.name}</span>
            <span className="block mt-1 text-muted-foreground text-xs">{provider.description}</span>
          </span>
          <ArrowRight className="size-4 text-muted-foreground shrink-0" />
        </button>
      ))}
      <button
        type="button"
        className="flex items-center gap-3 hover:bg-muted/50 px-4 py-3 w-full text-left transition-colors hover:cursor-pointer"
        onClick={() => onSelectProvider("Custom provider")}
      >
        <Avatar className="rounded-full size-7">
          <AvatarFallback className="rounded-full">
            <Plus className="size-5" />
          </AvatarFallback>
        </Avatar>
        <span className="flex-1 min-w-0">
          <span className="block font-medium text-sm">Customize provider</span>
          <span className="block mt-1 text-muted-foreground text-xs">{customProviderDescription}</span>
        </span>
      </button>
    </div>
  )
}

export function ByokProviderSettings({ provider }: { provider: ByokProvider }) {
  const isCustomProvider = provider === "Custom provider"

  return (
    <section>
      <div>
        <FieldSet>
          <FieldGroup className="gap-5">

            {isCustomProvider && (
              <Field className="gap-1">
                <FieldLabel htmlFor="provider-name">Provider name</FieldLabel>
                <FieldDescription>Name used to identify this connection.</FieldDescription>
                <Input id="provider-name" placeholder="My provider" />
              </Field>
            )}

            <Field className="gap-1">
              <FieldLabel htmlFor="api-key">API key</FieldLabel>
              <FieldDescription>Your API key is stored securely.</FieldDescription>
              <Input id="api-key" type="password" placeholder="Enter API key" />
            </Field>

            <Field className="gap-1">
              <FieldLabel htmlFor="api-base-url">API Base URL</FieldLabel>
              <FieldDescription>Leave blank to use the default base URL for this provider.</FieldDescription>
              <Input id="api-base-url" placeholder="https://api.openai.com/v1" />
            </Field>

            <Field orientation="horizontal">
              <Switch className="hover:cursor-pointer" id="responses-api" aria-label="Use Responses API" />
              <FieldLabel htmlFor="responses-api">Use Responses API</FieldLabel>
              <FieldDescription>Route requests through the Responses API.</FieldDescription>
            </Field>

            <Field orientation="horizontal">
              <Switch className="hover:cursor-pointer" id="default-models" aria-label="Enable default models" />
              <FieldLabel htmlFor="default-models">Enable default models</FieldLabel>
              <FieldDescription>Make default models available in features.</FieldDescription>
            </Field>

            <Field className="gap-1">
              <FieldLabel htmlFor="custom-model">Custom models</FieldLabel>
              <FieldDescription>Custom model names accepted by this endpoint.</FieldDescription>
              <div className="flex gap-2">
                <Input id="custom-model" placeholder="openai/gpt-4.1" />
                <Button className="hover:cursor-pointer" type="button" variant="outline" size="sm"><Plus /> Add model</Button>
              </div>
            </Field>

          </FieldGroup>

          <Button type="button" className="mt-2 mb-3 w-full hover:cursor-pointer">Save provider</Button>

        </FieldSet>
      </div>
    </section>
  )
}
