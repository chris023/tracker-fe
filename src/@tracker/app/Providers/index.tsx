import { ChakraProvider } from "@chakra-ui/react"

import { theme } from "@tracker/chakra-ui"

const Providers: React.FunctionComponent = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export { Providers }
