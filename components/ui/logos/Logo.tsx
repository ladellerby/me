import React from "react";
import { Box, Image, useColorModeValue } from "@chakra-ui/react";

type LogoProps = {
  w: string;
  color: string[];
};

export default function Logo(props: LogoProps) {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("primary.800", "white");
  const logo = useColorModeValue(
    "/le_logo_badge_dark.png",
    "/le_logo_badge_light.png"
  );

  return (
    <Box {...props}>
      <Image
        boxSize="165px"
        src={logo}
        alt="LaDell Erby Logo"
        color={color}
        bg={bg}
      />
    </Box>
  );
}
