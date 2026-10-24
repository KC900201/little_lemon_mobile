import { create } from "zustand"

type ReservationDraftStore = {
  date: string
  partySize: number
  slotId: string | null
  setDate: (date: string) => void
  setPartySize: (size: number) => void
  setSlot: (id: string) => void
  reset: () => void
}

const initial = {
  date: "",
  partySize: 2,
  slotId: null
}

export const useReservationDraftStore = create<ReservationDraftStore>((set) => ({
  ...initial,
  setDate: (date) => set({date, slotId: null}),
  setPartySize: (partySize) => set({ partySize}),
  setSlot: (slotId) => set({ slotId }),
  reset: () => set(initial)
}))