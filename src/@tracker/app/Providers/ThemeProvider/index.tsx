import { useState } from "react"

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Theme as BaseTheme,
} from "@tracker/common"

export type Theme = BaseTheme & {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const theme: Theme = {
    ...createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
            },
          },
        },
        MuiPaper: {
          defaultProps: {
            variant: "outlined",
          },
        },
        MuiTab: {
          styleOverrides: {
            root: {
              textTransform: "none",
            },
          },
        },
        MuiTextField: {
          defaultProps: {
            fullWidth: true,
            variant: "outlined",
          },
        },
      },
    }),
    setDarkMode,
  }

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export { ThemeProvider }
