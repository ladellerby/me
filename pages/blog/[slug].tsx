import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layouts/Layout";
import { getAllPostsWithSlug, getPost } from "../../utils/api";

type BlogDetailPageProps = {
  post: any;
};

const BlogDetail = ({ post }: BlogDetailPageProps) => {
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
        >
          <article>
            <ReactMarkdown>
              {post.content.replace(/(<([^>]+)>)/gi, "")}
            </ReactMarkdown>
          </article>
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

export async function getStaticPaths() {
  const allPostsWithSlugs = await getAllPostsWithSlug();
  return {
    paths:
      allPostsWithSlugs.edges.map(({ node }: any) => `/blog/${node.slug}`) ||
      [],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPost(params.slug);
  return {
    props: {
      post: postData,
    },
  };
}

export default BlogDetail;
