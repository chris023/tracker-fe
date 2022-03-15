import { Box } from "@tracker/common"
import { DataGrid } from "@mui/x-data-grid"

import { columns } from "./columns"
import { CreateAsset } from "./components"

import { mockData as rows } from "./mockData"

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
