import { Box, Flex, Grid, Image } from "@chakra-ui/react";
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
      <Box>
        <Image src="/images/logo-black.png"></Image>
      </Box>

      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={2}
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
