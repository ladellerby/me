import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import MenuItems from "./MenuItems";
import ThemeSelector from "../widgets/ThemeSelector";

const RightMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("primary.800", "white");

  return (
    <>
      <Button bg={bg} color={color} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        motionPreset={"slideInBottom"}
        size="xs"
      >
        <DrawerOverlay color={color}>
          <DrawerContent bg={bg} color={color}>
            <DrawerCloseButton bg={bg} color={color} />
            <DrawerHeader></DrawerHeader>

            <DrawerBody bg={bg} color={color}>
              <Box display="block" flexBasis={{ base: "100%", md: "auto" }}>
                <Flex
                  align={["center", "center", "center", "center"]}
                  justify={["center", "space-between", "flex-end", "flex-end"]}
                  direction={["column", "row", "row", "row"]}
                  pt={[4, 4, 0, 0]}
                >
                  <ThemeSelector />
                  <MenuItems to="/">Home</MenuItems>
                  <MenuItems to="/">About </MenuItems>
                  <MenuItems to="/">Blog </MenuItems>
                  <MenuItems to="/">Resume </MenuItems>
                  <MenuItems to="/api/resume">API</MenuItems>
                  <MenuItems to="/contact" isLast>
                    <Button
                      variant="outline"
                      size="sm"
                      rounded="md"
                      color={["primary.500", "primary.500", "white", "white"]}
                      bg={["white", "white", "primary.500", "primary.500"]}
                      _hover={{
                        bg: [
                          "primary.100",
                          "primary.100",
                          "primary.600",
                          "primary.600",
                        ],
                      }}
                    >
                      Contact
                    </Button>
                  </MenuItems>
                </Flex>
              </Box>
            </DrawerBody>
            <DrawerFooter bg={bg} color={color}></DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default RightMenu;
