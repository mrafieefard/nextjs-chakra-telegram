// app/providers.tsx
'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export function ChakraUIProvider({ children }: { children: React.ReactNode }) {
  const config = {
    initialColorMode: "system",
    useSystemColorMode: false,
  }

  const theme = extendTheme({ config })

  return <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>
}