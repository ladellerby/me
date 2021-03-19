import { Grid } from "@chakra-ui/react";
import React from "react";
import { Blog } from "../../../interfaces";
import BlogCard from "../cards/BlogCard";

type BlogGridProps = {
  blogs: Blog[];
};

const BlogGrid = (props: BlogGridProps) => {
  const { blogs } = props;
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={6}
    >
      {blogs.map((blog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </Grid>
  );
};

export default BlogGrid;
