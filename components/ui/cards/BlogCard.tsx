import { Box, Badge, Image, useColorModeValue, HStack } from "@chakra-ui/react";
import React from "react";
import { Blog } from "../../../interfaces";
import { useRouter } from "next/router";

type BlogCardProps = {
  data: Blog;
};

const BlogCard = (props: BlogCardProps) => {
  const router = useRouter();
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const {
    title,
    excerpt,
    featuredImage,
    date,
    slug,
    featuredImageAlt,
    tags,
  } = props.data;
  return (
    <Box
      zIndex="99"
      as="button"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bg}
      color={color}
      onClick={() => {
        router.push(`/blog/${slug}`);
      }}
    >
      <Image src={featuredImage} alt={featuredImageAlt} />

      <Box bg={bg} color={color} p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Blog
          </Badge>
          <Box
            color={color}
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            bg={bg}
          >
            {title}
          </Box>
        </Box>
        <Box
          color={color}
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          bg={bg}
          textAlign="left"
          mt="1"
        >
          <Badge borderRadius="full" px="2" colorScheme="blackAlpha">
            {date}
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          textAlign="left"
        >
          {excerpt}
        </Box>
        <HStack></HStack>
        <Box d="flex" mt="2" alignItems="center">
          <HStack>
            {tags.map((tag) => (
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {tag}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
