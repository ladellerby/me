import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ProjectsCard from "../cards/profile/ProjectsCard";

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
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </Grid>
  );
};

export default ProfileGrid;
