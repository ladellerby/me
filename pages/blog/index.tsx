import React from "react";
import Layout from "../../components/layouts/Layout";
import BlogGrid from "../../components/ui/grids/BlogGrid";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Blog } from "../../interfaces/index";

const BlogPage = () => {
  const bg = useColorModeValue("white", "#171923");

  const blogs: Blog[] = [];
  return (
    <div>
      <Layout title="Blog | LaDell Erby">
        <Flex
          w={["100%", "100%", "100%", "100%"]}
          direction={["column", "column", "row", "column"]}
          bg={bg}
          boxShadow="md"
          rounded="lg"
          p="4"
          align="center"
          m="2.5px"
        >
          <BlogGrid blogs={blogs} />
        </Flex>
      </Layout>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
        #tsparticles {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          bottom: 0;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
