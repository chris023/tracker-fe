import { Box } from "@tracker/common"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import { CreateAsset } from ".."
import casual from "casual-browserify"

casual.seed(123)

const columns: GridColDef[] = [
  { field: "id" },
  { field: "name", headerName: "Name" },
  {
    field: "description",
    headerName: "Description",
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
    editable: true,
  },
  {
    field: "lastPing",
    headerName: "Last Ping",
    type: "number",
    editable: true,
  },
  {
    field: "trackerId",
    headerName: "Tracker",
    type: "number",
  },
  {
    field: "",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    renderCell: ({ row }: any) => {
      const { name, description, trackerId } = row

      return (
        <CreateAsset
          initialValues={{ name, description, trackerId, tags: [] }}
        />
      )
    },
  },
]

const rows = [...new Array(10)].map(() => ({
  id: casual.uuid,
  name: casual.name,
  description: casual.description,
  location: casual.address,
  lastPing: casual.date(),
  trackerId: casual.uuid,
}))

const AssetsTable = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          pr: 2,
          pb: 1,
        }}
      >
        <CreateAsset />
      </Box>
      <div style={{ height: 372, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          columnVisibilityModel={{ id: false }}
        />
      </div>
    </>
  )
}

export { AssetsTable }
