import { useEffect, useState } from "react"

import { useSearchParams } from "@tracker/hooks"

import { Button, Box, Drawer as BaseDrawer, Toolbar } from "@tracker/common"
import { stringify } from "query-string"
import { useNavigate } from "react-router-dom"

const Drawer = () => {
  const navigate = useNavigate()
  const { details, ...restSearchParams } = useSearchParams()

  const [open, setOpen] = useState(Boolean(details))

  useEffect(() => {
    setOpen(Boolean(details))
  }, [details])

  const closeDrawer = () => {
    setOpen(false)
    navigate({ pathname: "/dashboard", search: stringify(restSearchParams) })
  }

  return (
    <BaseDrawer
      variant="temporary"
      open={open}
      onClose={closeDrawer}
      sx={{
        width: 480,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          position: "relative",
          width: 480,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Button onClick={closeDrawer}>Close</Button>
      <Box sx={{ overflowY: "auto" }}>Drawer Content</Box>
    </BaseDrawer>
  )
}

export { Drawer }
