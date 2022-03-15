import { Routes, Route, Navigate } from "react-router-dom"

import { Header, Providers } from "@tracker/app"
import { Box } from "@tracker/common"
import { Dashboard, Login, Manage } from "pages"

import { AssetsTable, TrackersTable } from "./pages/Manage/components"

const App = () => {
  return (
    <Providers>
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "background.default",
        }}
      >
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage" element={<Manage />}>
            <Route path="assets" element={<AssetsTable />} />
            <Route path="trackers" element={<TrackersTable />} />
            <Route path="" element={<Navigate replace to="/manage/assets" />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </Box>
    </Providers>
  )
}

export default App
