import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import { Box } from "@tracker/common"

const Map = () => {
  return (
    <Box sx={{ position: "relative", height: `calc(100vh - 64px)` }}>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  )
}

export { Map }
