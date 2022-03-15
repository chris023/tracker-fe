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
    width: 150,
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
    width: 300,
    editable: true,
  },
  {
    field: "lastPing",
    headerName: "Last Ping",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "trackerId",
    headerName: "Tracker",
    type: "number",
    width: 110,
  },
  {
    field: "",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: ({ row }: any) => {
      const { name, description } = row

      return <CreateAsset initialValues={{ name, description, tags: [] }} />
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
