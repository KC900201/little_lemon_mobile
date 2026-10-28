
import { AuthError } from "@supabase/supabase-js"

export function toAuthMessage(e: unknown): string {
  if  (e instanceof AuthError) {
    if (e.code === "invalid_credentials") return "Incorrect email or password"
    if (e.code === "email_not_confirmed") return "Please confirm your email before signing in"
  }

  return "Something went wrong. Please try again."
}