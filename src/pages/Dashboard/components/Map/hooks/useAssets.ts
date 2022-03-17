import { useSearchParams } from "@tracker/hooks"
import { mockAssets } from "@tracker/mocks"

const useAssets = () => {
  const { assetId, history } = useSearchParams()

  if (assetId && history) {
    return mockAssets(4, 234)
  }

  return mockAssets(10)
}

export { useAssets }
