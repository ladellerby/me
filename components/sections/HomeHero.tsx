import {
  Flex,
  Stack,
  Heading,
  Button,
  Link,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import React from "react";

type HomeHeroProps = {
  title: string;
  subtitle: string;
  ctaLink1: string;
  ctaText1: string;
  ctaLink2: string;
  ctaText2: string;
};

export default function HomeHero(props: HomeHeroProps) {
  const { title, subtitle, ctaLink1, ctaText1, ctaLink2, ctaText2 } = props;
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("primary.800", "white");

  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      minH="70vh"
      px={12}
      mb={0}
      background={bg}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        -
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          color={color}
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="lg"
          color={color}
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <HStack>
          <Link href={ctaLink1}>
            <Button
              borderRadius="8px"
              py="4"
              px="14"
              lineHeight="1"
              size="lg"
              colorScheme="blakcAlpha"
              variant="outline"
            >
              {ctaText1}
            </Button>
          </Link>
          <Link href={ctaLink2}>
            <Button
              borderRadius="8px"
              py="4"
              px="16"
              lineHeight="1"
              size="lg"
              colorScheme="blakcAlpha"
              variant="outline"
            >
              {ctaText2}
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Flex>
  );
}
