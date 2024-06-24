import { ChakraProvider } from '@chakra-ui/react'

export function ChakraUIProviders({children}) {
    return <ChakraProvider>{children}</ChakraProvider>;
}