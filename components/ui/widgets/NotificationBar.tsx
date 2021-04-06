import { Box, Stack, useColorModeValue, Link } from "@chakra-ui/react";
import * as React from "react";

export const NotificationBar = () => {
  return (
    <Box w="100%" as="section" zIndex="99">
      <Stack
        direction="row"
        py="1"
        px={{ base: "3", md: "6", lg: "4" }}
        color={useColorModeValue("white", "black")}
        bg={useColorModeValue("black", "white")}
        justifyContent="flex-end"
        alignItems="right"
      >
        <Link
          w={{ base: "auto", sm: "auto" }}
          flexShrink={0}
          href="#"
          px="4"
          textAlign="center"
          borderWidth="1px"
          borderColor={useColorModeValue("white", "black")}
          fontWeight="medium"
          rounded="base"
        >
          Download Resume
        </Link>
      </Stack>
    </Box>
  );
};

export default NotificationBar;
