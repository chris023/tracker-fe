import { ThemeProvider, createTheme } from "@tracker/common";
import { BrowserRouter } from "react-router-dom";

const Providers: React.FunctionComponent = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiPaper: {
              defaultProps: {
                variant: "outlined",
              },
            },
            MuiTextField: {
              defaultProps: {
                fullWidth: true,
              },
            },
          },
        })}
      >
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { Providers };
