import { Container, Paper, Tabs, Tab } from "@tracker/common";

import {
  Outlet,
  useLocation,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";

const Manage: React.FunctionComponent = () => {
  const match = useResolvedPath("");
  const location = useLocation();
  const navigate = useNavigate();

  const tab =
    location.pathname.split(match.pathname)[1]?.split("/")?.[1] || "assets";

  const onTabSelect = (e: React.SyntheticEvent, path: string) => {
    navigate(path);
  };

  return (
    <Container maxWidth="lg">
      <Paper sx={{ mt: 3 }}>
        <Tabs value={`${match.pathname}/${tab}`} onChange={onTabSelect}>
          <Tab label="Assets" value={`${match.pathname}/assets`} />
          <Tab label="Trackers" value={`${match.pathname}/trackers`} />
        </Tabs>
        <Outlet />
      </Paper>
    </Container>
  );
};

export { Manage };
