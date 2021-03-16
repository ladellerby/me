import { Box, Button, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export const CallToAction = () => {
  return (
    <Box as="section">
      <Box
        maxW="100%"
        mx="auto"
        px={{ base: "6", lg: "10" }}
        py={{ base: "16", sm: "20" }}
        textAlign="center"
      >
        <Heading
          as="h2"
          size="3xl"
          fontWeight="bold"
          letterSpacing="normal"
          textAlign="left"
        >
          LaDell Erby
        </Heading>
        <Text
          size="3xl"
          fontWeight="bold"
          letterSpacing="normal"
          textAlign="left"
        >
          Web Engineer
        </Text>
        <Text mt="4" fontSize="lg" alignItems="flex-start" textAlign="left">
          Converting visions into seamless web experiences one byte and at a
          time.
        </Text>
        <Box maxW="100%" alignContent="start">
          <Button
            mt="8"
            textAlign="left"
            as="a"
            href="#"
            size="lg"
            colorScheme="blackAlpha"
            fontWeight="bold"
            m="2"
          >
            About
          </Button>
          <Button
            mt="8"
            textAlign="left"
            as="a"
            href="#"
            size="lg"
            colorScheme="blue"
            fontWeight="bold"
            m="2"
          >
            Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
