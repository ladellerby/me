import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import SoundPad from "./SoundPad";

type SoundBoardProps = {
  buttons: any[];
};

function Soundboard(props: SoundBoardProps) {
  return (
    <Flex
      w={["100%", "100%", "100%", "100%"]}
      direction="column"
      boxShadow="md"
      rounded="lg"
      p="4"
      align="center"
      m="2.5px"
    >
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
      >
        {props.buttons.map((button: any) => (
          <SoundPad
            buttonName={button.name}
            keyName={button.key}
            sound={button.sound}
          />
        ))}
      </Grid>
    </Flex>
  );
}

export default Soundboard;
