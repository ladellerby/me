import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../cards/ProjectCard";
import resume from "../../../resume.json";

type ProjectsGridProps = {
  data: any;
};
const ProjectsGrid = (_props: ProjectsGridProps) => {
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
      <ProjectCard
        website={resume.projects[0]["website"]}
        image={resume.projects[0]["image"]}
        url={resume.projects[0]["url"]}
        name={resume.projects[0]["name"]}
        description={resume.projects[0]["description"]}
        tags={resume.projects[0]["keywords"]}
      />
      <ProjectCard
        website={resume.projects[1]["website"]}
        image={resume.projects[1]["image"]}
        url={resume.projects[1]["url"]}
        name={resume.projects[1]["name"]}
        description={resume.projects[1]["description"]}
        tags={resume.projects[1]["keywords"]}
      />
    </Grid>
  );
};

export default ProjectsGrid;
