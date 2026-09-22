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
import { signUp } from "@/lib/auth-client"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault()
    if (password !== confirmPassword) return setError("Passwords do not match")

    setError("")
    setLoading(true)

    await signUp.email(
      { name, email, password },
      {
        onSuccess: () => router.push("/"),
        onError: ({ error }) => setError(error.message),
        onResponse: () => setLoading(false),
      },
    )
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
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

            <h1 className="font-semibold text-xl">Create your Mit-KI account</h1>
            <FieldDescription>
              Already have an account? <Link href="/sign-in">Sign in</Link>
            </FieldDescription>
          </div>

          <Field className="gap-1">
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={loading}
              required
            />
          </Field>
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
            <Field className="gap-4 grid grid-cols-2">
              <Field className="gap-1">
                <FieldLabel htmlFor="password">Password</FieldLabel>
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
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  disabled={loading}
                  required
                />
              </Field>
            </Field>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
          </Field>
          <Field className="gap-1">
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button
              type="submit"
              disabled={loading ||
                !name.trim() ||
                !email.trim() ||
                password.length < 8 ||
                password !== confirmPassword
              }
              className="hover:cursor-pointer"
            >
              {loading ? "Creating account…" : "Create account"}
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
