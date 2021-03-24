import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../ui/logos/Logo";
import MenuItems from "../ui/menus/MenuItems";
import MobileMenu from "../ui/menus/MobileMenu";
import ThemeSelector from "../ui/widgets/ThemeSelector";

export default function Header() {
  const router = useRouter();
  const [show] = React.useState(false);
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const borderTopColor = useColorModeValue(
    "7px solid black",
    "7px solid white"
  );

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={6}
      bg={bg}
      color={color}
      borderTop={borderTopColor}
    >
      <Flex
        onClick={() => {
          router.push("/");
        }}
        as="button"
        align="center"
        zIndex={99}
      >
        <Logo
          w="200px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        {!show ? <MobileMenu /> : null}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <ThemeSelector />
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/about">About </MenuItems>
          <MenuItems to="/blog">Blog </MenuItems>
          <MenuItems to="/resume.pdf">Resume </MenuItems>
          <MenuItems to="/api/resume">API</MenuItems>
          <MenuItems to="/" isLast>
            <Button
              variant="outline"
              size="sm"
              rounded="md"
              color={color}
              bg={bg}
              _hover={{
                bg: { bg },
                color: { color },
              }}
            >
              Contact
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
}
