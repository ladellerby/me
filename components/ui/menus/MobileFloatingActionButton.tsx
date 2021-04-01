import { Box } from "@chakra-ui/react";
import React from "react";
import { Action, Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const MobileFloatingActionButton = () => {
  return (
    <Box>
      <Fab style={{ top: 24, right: -15 }}>
        <Action color="#000000" text="Help">
          <i className="fa fa-help" />
        </Action>
        <Action color="#000000" text="Help">
          <i className="fa fa-help" />
        </Action>
        <Action color="#000000" text="Help">
          <i className="fa fa-help" />
        </Action>
        <Action color="#000000" text="Help">
          <i className="fa fa-help" />
        </Action>
        <Action color="#000000" text="Help">
          <i className="fa fa-help" />
        </Action>
      </Fab>
    </Box>
  );
};

export default MobileFloatingActionButton;
