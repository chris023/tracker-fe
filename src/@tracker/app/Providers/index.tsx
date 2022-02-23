import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const Providers: React.FunctionComponent = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export { Providers };
