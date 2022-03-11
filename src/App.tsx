import { Routes, Route, Navigate } from "react-router-dom";

import { Header, Providers } from "@tracker/app";
import { Dashboard, Login, Manage } from "pages";

import {
  AssetsTable,
  CreateAsset,
  TrackersTable,
} from "./pages/Manage/components";

const App = () => {
  return (
    <Providers>
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
    </Providers>
  );
};

export default App;
