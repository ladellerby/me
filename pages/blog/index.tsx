import React from "react";
import Layout from "../../components/layouts/Layout";
import BlogGrid from "../../components/ui/grids/BlogGrid";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Blog } from "../../interfaces/index";
import { getAllPosts } from "../../utils/api";

type BlogPageProps = {
  posts: Blog[];
};

const BlogPage = (props: BlogPageProps) => {
  const bg = useColorModeValue("white", "#171923");

  const { posts } = props;
  return (
    <div>
      <Layout title="Blog | LaDell Erby">
        <Flex
          w={["100%", "100%", "100%", "100%"]}
          direction={["column", "column", "row", "column"]}
          bg={bg}
          rounded="none"
          p="4"
          align="center"
          minH="70vh"
          m="0"
        >
          <BlogGrid blogs={posts} />
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

export async function getStaticProps() {
  const posts: Blog[] = [];

  const AllPostsResponse = await getAllPosts(false);

  await AllPostsResponse.map((post: any) => {
    const tags: string[] = [];
    post.node.tags.edges.map((tag: any) => {
      tags.push(tag.node.name);
    });

    posts.push({
      excerpt: post?.node.excerpt.replace(/(<([^>]+)>)/gi, ""),
      date: post?.node.date,
      content: post?.node.content,
      id: post?.node.id,
      title: post?.node.title,
      tags: tags,
      featuredImage: post?.node.featuredImage.node.mediaItemUrl,
      featuredImageAlt: post?.node.featuredImage.node.altText,
      slug: post?.node.slug,
    });
  });

  return {
    props: {
      posts,
    },
  };
}

export default BlogPage;
