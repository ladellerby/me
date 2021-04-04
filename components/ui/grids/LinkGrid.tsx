import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import LinkCard from "../cards/LinkCard";

type LinkGridProps = {
  data: any;
};
const LinkGrid = (_props: LinkGridProps) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={8}
      bg={bg}
      alignItems="center"
    >
      <LinkCard
        website="https://www.mixcloud.com/ladell-erby/quarantine-chronicles-vol-2/"
        name="Quarantine Chronicles Vol 2:  The 'Lit'uation"
        description="Hip hop practice mix of my few current favorites. Heavy #YayArea influence. Gonna get as much practice as I can behind the decks. The world may have seemed to stop, but these turntables gonna stay spinning 🙌🏾"
        tags={["hip-hop", "top-40"]}
      />
      <LinkCard
        website="https://m.mixcloud.com/ladell-erby/quarantine-chronicle-vol-4-west-coast-hip-hop-classics-edition/"
        name="Quarantine Chronicles Vol. 4: West Coast Hip Hop"
        description="WEST WEST yall! Back at you with some old school west coast bangers! Killa Cali till the day I D.I.E. Showed some love to my home state. Tracks from Northern and Southern California."
        tags={["hip-hop", "west-coast"]}
      />
    </Grid>
  );
};

export default LinkGrid;
