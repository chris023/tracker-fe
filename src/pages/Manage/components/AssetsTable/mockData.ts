import casual from "casual-browserify"

casual.seed(123)

export const mockData = [...new Array(10)].map(() => ({
  id: casual.uuid,
  name: casual.name,
  description: casual.description,
  location: casual.address,
  lastPing: casual.date(),
  trackerId: Math.random() > 0.5 ? casual.uuid : null,
}))
