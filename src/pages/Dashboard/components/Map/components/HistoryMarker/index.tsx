import { Asset } from "@tracker/types"
import { Marker, MarkerProps } from "react-leaflet"

import { HistoryPopup } from "../HistoryPopup"

interface IHistoryMarkerProps {
  asset: Asset
  markerProps: MarkerProps
}

const HistoryMarker: React.FunctionComponent<IHistoryMarkerProps> = ({
  asset,
  markerProps,
}) => {
  return (
    <Marker {...markerProps}>
      <HistoryPopup {...asset} />
    </Marker>
  )
}

export { HistoryMarker }
