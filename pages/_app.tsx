import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import BackgroundParticles from "../components/ui/widgets/BackgroundParticles";

const colors = {
  brand: {},
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <BackgroundParticles />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
