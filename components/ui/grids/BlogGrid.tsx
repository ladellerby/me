import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Blog } from "../../../interfaces";
import BlogCard from "../cards/BlogCard";

type BlogGridProps = {
  blogs: Blog[];
};

const BlogGrid = (props: BlogGridProps) => {
  const { blogs } = props;
  const bg = useColorModeValue("white", "gray.900");
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={6}
      bg={bg}
    >
      {blogs.map((blog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </Grid>
  );
};

export default BlogGrid;
