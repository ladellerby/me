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
          boxShadow="md"
          rounded="none"
          p="4"
          align="center"
          minH="70vh"
          //m="2.5px"
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

  console.log(JSON.stringify(AllPostsResponse, null, 2));
  await AllPostsResponse.edges.map((_node: any) => {
    posts.push(
      {
        excerpt: `Welcome to WordPress. This is your first post. Edit 
      or delete it, then start writing!`,
        date: "2021-03-15T08:18:23",
        content: `"<p>Welcome to WordPress. This is your first post. Edit 
      or delete it, then start writing!</p>\n"`,
        id: "cG9zdDox",
        title: "Hello World",
        tags: ["test", "blog", "tags"],
        featuredImage:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        featuredImageAlt: "landscape sunset photograph",
        slug: "hello-world",
      },
      {
        excerpt: `Welcome to WordPress. This is your first post. Edit 
      or delete it, then start writing!`,
        date: "2021-03-15T08:18:23",
        content: `"<p>Welcome to WordPress. This is your first post. Edit 
      or delete it, then start writing!</p>\n"`,
        id: "cG9zdDox",
        title: "Hello World",
        tags: ["test", "blog", "tags"],
        featuredImage:
          "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featuredImageAlt: "landscape sunset photograph",
        slug: "hello-world",
      },
      {
        excerpt: `Welcome to WordPress. This is your first post. Edit 
      or delete it, then start writing!`,
        date: "2021-03-15T08:18:23",
        content: `"<p>Welcome to WordPress. This is your first post. Edit 
      or delete it, then start writing!</p>\n"`,
        id: "cG9zdDox",
        title: "Hello World",
        tags: ["test", "blog", "tags"],
        featuredImage:
          "https://images.unsplash.com/photo-1504164996022-09080787b6b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featuredImageAlt: "landscape sunset photograph",
        slug: "hello-world",
      },
      {
        excerpt: `Welcome to WordPress. This is your first post. Edit 
      or delete it, then start writing!`,
        date: "2021-03-15T08:18:23",
        content: `"<p>Welcome to WordPress. This is your first post. Edit 
      or delete it, then start writing!</p>\n"`,
        id: "cG9zdDox",
        title: "Hello World",
        tags: ["test", "blog", "tags"],
        featuredImage:
          "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featuredImageAlt: "landscape sunset photograph",
        slug: "hello-world",
      }
    );
  });

  return {
    props: {
      posts,
    },
  };
}

export default BlogPage;
