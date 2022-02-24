import { ThemeProvider as MuiThemeProvider, createTheme } from "@tracker/common"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { BrowserRouter } from "react-router-dom"

const Providers: React.FunctionComponent = ({ children }) => {
  const theme = createTheme({
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
  })

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export { Providers }
