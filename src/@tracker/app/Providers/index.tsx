import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"

import { theme } from "@tracker/chakra-ui"

const Providers: React.FunctionComponent = ({ children }) => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </BrowserRouter>
  )
}

export { Providers }
