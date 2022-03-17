import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Link, useNavigate } from "react-router-dom"
import { stringify } from "query-string"

import { Box, Button } from "@tracker/common"
import { useSearchParams } from "@tracker/hooks"

import { useAssets } from "./hooks"

const Map = () => {
  const searchParams = useSearchParams()
  const navigate = useNavigate()

  const assets = useAssets()

  return (
    <Box
      sx={{ position: "relative", height: `calc(100vh - 64px)`, width: "100%" }}
    >
      <MapContainer center={[39.7392, -104.9903]} zoom={13}>
        <TileLayer
          attribution="&copy; Tracker App"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {assets.map(({ id, latitude, longitude }) => {
          return (
            <Marker
              position={[Number(latitude), Number(longitude)]}
              key={`marker-${id}`}
            >
              <Popup>
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
            </Marker>
          )
        })}
      </MapContainer>
    </Box>
  )
}

export { Map }
