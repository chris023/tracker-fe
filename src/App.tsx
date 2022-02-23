import { Routes, Route, Navigate } from "react-router-dom"

import { Providers } from "@tracker/app"
import { Dashboard, Login } from "pages"

const App = () => {
  return (
    <Providers>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Providers>
  )
}

export default App
