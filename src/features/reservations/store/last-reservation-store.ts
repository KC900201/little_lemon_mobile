import { create } from "zustand"
import { Reservation } from "../types"

interface LastReservationState {
  reservation: Reservation | null
  setReservation: (reservation: Reservation) => void
  clear: () => void
}

export const useLastReservationStore = create<LastReservationState>((set) => ({
  reservation: null,
  setReservation: (reservation) => set({ reservation }),
  clear: () => set({ reservation: null })
}))