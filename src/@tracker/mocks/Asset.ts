import casual from "casual-browserify"
// @ts-ignore
import pr from "pseudo-random"

import { Asset } from "./../types/Asset"

const defaultSeed = 123

const denverMin = [39.705206, -105.02854]
const denverMax = [39.775957, -104.895244]

export const mockAssets = (n: number, seed: number = defaultSeed): Asset[] => {
  casual.seed(seed)

  casual.define("denverLatitude", () => {
    return (denverMax[0] - denverMin[0]) * pr(seed).random() + denverMin[0]
  })

  casual.define("denverLongitude", () => {
    return (denverMax[1] - denverMin[1]) * pr(seed).random() + denverMin[1]
  })

  return [...new Array(n)].map(() => ({
    id: casual.uuid,
    name: casual.name,
    description: casual.description,
    address: casual.address,
    // @ts-ignore
    latitude: casual.denverLatitude,
    // @ts-ignore
    longitude: casual.denverLongitude,
    lastPing: casual.date(),
    trackerId: Math.random() > 0.5 ? casual.uuid : null,
  }))
}
