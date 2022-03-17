export interface Asset {
  id: string
  name: string
  description?: string
  address?: string
  latitude?: string
  longitude?: string
  lastPing?: string
  trackerId: string | null
}
