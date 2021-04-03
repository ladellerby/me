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
      <ProjectCard
        website="/sound-board"
        image="https://api.ladellerby.com/wp-content/uploads/2021/04/le-react-sound-board.png"
        url="https://github.com/ladellerby/me/tree/master/components/ui/widgets/sound-board"
        name="react-sound-board"
        description="Blending my passion for music and technology in a simple soundboard component using my favorite sound bytes."
        tags={["react", "howler.js"]}
      />
      <ProjectCard
        website="/api-client"
        image="https://api.ladellerby.com/wp-content/uploads/2021/04/le-api-client.png"
        url="https://github.com/ladellerby/me/tree/master/components/ui/widgets/api-client"
        name="react-learn-api-client"
        description="Everyone should be able to experience the magic of tech. This simple component walks you through the process of sending a real api request to a server."
        tags={["react", "Fetch-Api"]}
      />
    </Grid>
  );
};

export default ProjectsGrid;
