import { useMutation, useQueryClient } from "@tanstack/react-query"
import { mockReservationApi } from "../api/mock-reservation"
import { ReservationInput } from "../types"

export function useCreateReservation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (input: ReservationInput) => mockReservationApi.createReservation(input),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({queryKey: ["reservations", "slots", variables.date]})
    }
  })
}