import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/layouts/Layout";

const BlogDetail = () => {
  const bg = useColorModeValue("white", "#171923");
  return (
    <div>
      <Layout title="Blog | {PostName}">
        <Flex
          direction={["column", "column", "row", "column"]}
          rounded="none"
          p="4"
          align="center"
          minH="70vh"
          m="0"
          bg={bg}
        ></Flex>
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

export default BlogDetail;
