import { create } from "zustand"

/**
 * @deprecated
 */
interface AuthState {
    isSignedIn: boolean
    isReady: boolean // false until the stored session has been checked
    signIn: () => void
    signOut: () => void
    setReady: () => void
}

/**
 * @deprecated
 */
export const useAuthStore = create<AuthState>((set) => ({
    isSignedIn: false,
    isReady: false,
    signIn: () => set({ isSignedIn: true }),
    signOut: () => set({ isSignedIn: false }),
    setReady: () => set({ isReady: true }),
}))