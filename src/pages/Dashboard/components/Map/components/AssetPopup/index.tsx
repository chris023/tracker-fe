import { Popup } from "react-leaflet"
import { Link, useNavigate } from "react-router-dom"
import { stringify } from "query-string"

import { Button } from "@tracker/common"
import { useSearchParams } from "@tracker/hooks"
import { Asset } from "@tracker/types"

const AssetPopup: React.FunctionComponent<Asset> = ({ id }) => {
  const searchParams = useSearchParams()
  const navigate = useNavigate()

  return (
    <Popup autoPan={true}>
      A pretty CSS3 popup. <br /> Easily customizable.
      <Link
        to={{
          pathname: "/dashboard",
          search: stringify({
            ...searchParams,
            assetId: id,
            details: true,
          }),
        }}
      >
        <Button>Details</Button>
      </Link>
      <Link
        to={{
          pathname: "/dashboard",
          search: stringify({
            assetId: id,
            ...(!searchParams.history ? { history: true } : {}),
          }),
        }}
      >
        <Button>History</Button>
      </Link>
    </Popup>
  )
}

export { AssetPopup }
