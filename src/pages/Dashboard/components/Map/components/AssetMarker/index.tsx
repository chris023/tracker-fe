import { Asset } from "@tracker/types"
import { Marker, MarkerProps } from "react-leaflet"

import { AssetPopup } from "../AssetPopup"

interface IAssetMarkerProps {
  asset: Asset
  markerProps: MarkerProps
}

const AssetMarker: React.FunctionComponent<IAssetMarkerProps> = ({
  asset,
  markerProps,
}) => {
  return (
    <Marker {...markerProps}>
      <AssetPopup {...asset} />
    </Marker>
  )
}

export { AssetMarker }
