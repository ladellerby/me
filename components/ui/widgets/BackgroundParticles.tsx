import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Particles from "react-tsparticles";

function BackgroundParticles() {
  const color = useColorModeValue("#000", "#fff");
  return (
    <Box
      as="div"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex="0"
    >
      <Particles
        options={{
          fpsLimit: 90,
          particles: {
            density: {
              max: 35,
            },
            color: {
              value: color,
            },
            life: {
              delay: {
                value: 10,
              },
            },

            links: {
              enable: true,
              color: color,
            },
            move: {
              enable: true,
            },
          },
        }}
      />
    </Box>
  );
}

export default BackgroundParticles;
