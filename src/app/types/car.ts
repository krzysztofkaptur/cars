import type { VehicleType } from '@/app/page'

export type Car = {
  "id": string
  "link": {
    "href": string
    "title": string
  },
  "title": string
  "brand": string
  "vehicleType": VehicleType
}