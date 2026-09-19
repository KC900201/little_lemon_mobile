import { useRouter } from "expo-router"

import { useLastReservationStore } from "../store/last-reservation-store"
import { useReservationDraftStore } from "../store/reservation-draft-store"
import { useCreateReservation } from "./use-create-reservation"

export function useReservationForm() {
  const router = useRouter()
  const draft = useReservationDraftStore()
  const setLastReservation = useLastReservationStore((s) => s.setReservation)
  const { mutate, isPending, error } = useCreateReservation()

  const isValid = Boolean(draft.date && draft.slotId && draft.partySize > 0)

  function submit(contact: { name: string; phone: string }) {
    if (!isValid || !draft.slotId) return

    mutate(
      { date: draft.date, slotId: draft.slotId, partySize: draft.partySize, ...contact },
      {
        onSuccess: (reservation) => {
          setLastReservation(reservation)
          draft.reset()
          router.replace("./reservations/success")
        }
      }
    )
  }

  return { draft, isValid, isPending, error, submit }
}