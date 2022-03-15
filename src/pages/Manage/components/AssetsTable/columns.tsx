import { GridColDef } from "@mui/x-data-grid"

import { IRowActionsCellProps, RowActionsCell } from "./components"
import { Tooltip } from "@tracker/common"

export const columns: GridColDef[] = [
  { field: "id" },
  { field: "name", headerName: "Name", flex: 1 },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
  {
    field: "location",
    headerName: "Location",
    flex: 1,
  },
  {
    field: "lastPing",
    headerName: "Last Ping",
    width: 100,
  },
  {
    field: "trackerId",
    headerName: "Tracker",
    flex: 1,
  },
  {
    field: "",
    headerName: "Actions",
    sortable: false,
    renderCell: ({ row }: { row: IRowActionsCellProps }) => {
      return <RowActionsCell {...row} />
    },
    width: 120,
  },
].map((v) => {
  if (v.renderCell) {
    return v
  }

  //@ts-ignore
  v.renderCell = ({ value }) => {
    return (
      <Tooltip title={value} placement="bottom-start">
        <span>{value}</span>
      </Tooltip>
    )
  }

  return v
})
