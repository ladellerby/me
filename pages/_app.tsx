import { CSSReset, extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import BackgroundParticles from "../components/ui/widgets/BackgroundParticles";
import "focus-visible/dist/focus-visible";
import Head from "next/head";

const colors = {
  brand: {},
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <BackgroundParticles />

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
