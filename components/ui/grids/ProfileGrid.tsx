import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ExperienceCard from "../cards/profile/ExperienceCard";
import HobbiesCard from "../cards/profile/HobbiesCard";
import ProjectsCard from "../cards/profile/ProjectsCard";
import SkillsCard from "../cards/profile/SkillsCard";
import SpotifyCard from "../cards/profile/SpotifyCard";
import SummaryCard from "../cards/profile/SummaryCard";

const ProfileGrid = () => {
  const bg = useColorModeValue("white", "gray.900");
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={6}
      bg={bg}
      alignItems="center"
    >
      <SummaryCard />
      <SkillsCard />
      <ExperienceCard />
      <HobbiesCard />
      <ProjectsCard />
      <SpotifyCard />
    </Grid>
  );
};

export default ProfileGrid;
