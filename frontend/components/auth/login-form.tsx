"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { signIn } from "@/lib/auth-client"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault()
    setError("")
    setLoading(true)

    await signIn.email(
      { email, password },
      {
        onSuccess: () => router.push("/"),
        onError: ({ error }) => setError(error.message),
        onResponse: () => setLoading(false),
      },
    )
  }

  return (
    <div className={cn("flex flex-col gap-6 text-[14px]", className)} {...props}>

      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex justify-center items-center rounded-full size-16 overflow-hidden">
              <Image
                src="/mit-kai-von-kleki.png"
                alt="Mit-KI"
                width={64}
                height={64}
                className="size-16 object-cover"
              />
            </div>
            <span className="sr-only">Mit-KI</span>
            <h1 className="font-semibold text-xl">Sign in to Mit-KI</h1>
            <FieldDescription>
              Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
            </FieldDescription>
          </div>
          <Field className="gap-1">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={loading}
              required
            />
          </Field>
          <Field className="gap-1">
            <div className="flex items-center">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Link
                href="#"
                className="ml-auto text-xs hover:underline underline-offset-4"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={loading}
              required
            />
          </Field>
          <Field className="gap-1">
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button
              type="submit"
              disabled={loading || !email.trim() || !password}
              className="hover:cursor-pointer"
            >
              {loading ? "Signing in…" : "Sign in"}
            </Button>
          </Field>
        </FieldGroup>
      </form>

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our<br /><Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>.
      </FieldDescription>

    </div>
  )
}
