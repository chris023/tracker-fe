import { BrowserRouter } from "react-router-dom"

import { ThemeProvider } from "./ThemeProvider"

const Providers: React.FunctionComponent = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  )
}

export { Providers }
