import { Box } from "@tracker/common"

import { Drawer, Map } from "./components"

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer />
      <Map />
    </Box>
  )
}

export { Dashboard }
