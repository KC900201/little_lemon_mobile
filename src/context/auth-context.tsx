import { Session, User as SupabaseUser } from "@supabase/supabase-js"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

import { supabase } from "@/lib/supabase/client"

export type User = {
	id: string
	name: string
	email: string
	username?: string
	profileImage?: string
	onboardingCompleted?: boolean
}

export interface SignUpInput {
	name: string
	email: string
	password: string
}

interface AuthContextType {
	user: User | null
	session: Session | null
	isReady: boolean
	signUp: (input: SignUpInput) => Promise<{ needsEmailConfirmation: boolean }>
	signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const toUser = (u: SupabaseUser): User => ({
	id: u.id,
	email: u.email ?? "",
	name: (u.user_metadata?.name as string | undefined) ?? "",
	profileImage: u.user_metadata?.avatar_url as string | undefined,
})

export function AuthProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState<Session | null>(null)
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session)
			setIsReady(true)
		})
		const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
			setSession(next)
		})
		return () => sub.subscription.unsubscribe()
	}, [])

	const signIn = async (email: string, password: string) => {}

	const signUp = async ({ name, email, password }: SignUpInput) => {
		const { data, error } = await supabase.auth.signUp({
			email: email.trim().toLowerCase(),
			password,
			options: { data: { name: name.trim() } },
		})
		if (error) throw error
		// With "Confirm email" enabled, Supabase returns a user but no session
		return { needsEmailConfirmation: !data.session }
	}

	const signOut = async () => {
		const { error } = await supabase.auth.signOut()
		if (error) throw error
	}

	return (
		<AuthContext.Provider
			value={{ user: session ? toUser(session.user) : null, session, isReady, signUp, signOut }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)

	if (context === undefined) {
		throw new Error("useAuth must be used inside AuthProvider")
	}

	return context
}
