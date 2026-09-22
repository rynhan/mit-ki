import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-background p-6 md:p-10 min-h-svh">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
