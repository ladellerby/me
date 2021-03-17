import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const MobileFloatingActionButton = () => {
  return (
    <Box>
      <Fab style={{ top: 24, right: 24 }} />
    </Box>
  );
};

export default MobileFloatingActionButton;
