import { IconButton, Stack, Tooltip } from "@tracker/common"

import { Link } from "react-router-dom"
import MapIcon from "@mui/icons-material/Map"

import { CreateAsset } from ".."

export interface IRowActionsCellProps {
  id: string
  name: string
  description?: string
  trackerId: string | null
}

const RowActionsCell: React.FunctionComponent<IRowActionsCellProps> = ({
  id,
  name,
  description,
  trackerId,
}) => {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-around", width: "100%" }}
    >
      <CreateAsset initialValues={{ name, description, trackerId, tags: [] }} />
      <Link to={{ pathname: "/dashboard", search: `?focus=asset&id=${id}` }}>
        <Tooltip title="Map">
          <span /* https://mui.com/components/tooltips/#disabled-elements */>
            <IconButton>
              <MapIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Link>
    </Stack>
  )
}

export { RowActionsCell }
