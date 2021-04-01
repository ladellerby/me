import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Box, useColorModeValue } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box as="div" bg={bg}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
