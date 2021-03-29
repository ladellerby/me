import {
  useColorModeValue,
  HTMLChakraProps,
  chakra,
  Flex,
  Icon,
  Link,
  VStack,
  Text,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Box,
  Heading,
  Spacer,
  ScaleFade,
  Image,
  ModalHeader,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import router from "next/router";
import { FaGitSquare } from "react-icons/fa";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

type ProjectCardProps = {
  image: string;
  website: string;
  url: string;
  name: string;
  description: string;
  tags: string[];
};

const ProjectCard = (props: ProjectCardProps) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const colorScheme = useColorModeValue("black", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { image, website, url, name, description, tags } = props;

  return (
    <>
      <Modal size="6xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={color} bg={bg}>
          <ModalCloseButton pb="5px" />
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Image size="100%" rounded="1rem" shadow="2xl" src={image} />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              colorScheme={colorScheme}
              mr={3}
              onClick={onClose}
            >
              Back
            </Button>
            <Button
              rightIcon={<Icon as={FaGitSquare} />}
              colorScheme={colorScheme}
              variant="outline"
              mr={3}
              onClick={() => {
                router.push(url);
              }}
            >
              Github
            </Button>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme={colorScheme}
              mr={3}
              variant="outline"
              onClick={() => {
                router.push(website);
              }}
            >
              Live
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <MotionCard
        zIndex={99}
        borderWidth="1px"
        borderColor={color}
        height={["350px", "350px", "350px", "350px"]}
        width={["350px", "350px", "350px", "350px"]}
        bg={bg}
        borderRadius="12px"
        animate={{ scale: [1.2, 0.9, 1] }}
        transition={{ duration: 0.75 }}
      >
        <Flex h="100%" w="100%" alignitems="center" justifyContent="center">
          <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
            <Spacer />
            <Box pl="20px" maxW="32rem">
              <ScaleFade initialScale={0.2} in={true}>
                <Heading color={color} bg={bg} mb={4}>
                  {name}
                </Heading>
                <Text pr="4px" color={color} bg={bg} fontSize="lg">
                  {description}
                </Text>
                <Spacer />
                <Box d="flex" mt="2" alignItems="center">
                  <HStack wrap="wrap">
                    {tags?.slice(0, 3).map((tag) => (
                      <Badge borderRadius="full" px="2" colorScheme="gray">
                        {tag}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              </ScaleFade>
            </Box>
            <Spacer />
            <Flex pb="18px" pr="20px" alignSelf="flex-end">
              <Link onClick={onOpen} color={color} bg={bg}>
                <Icon
                  as={FiArrowRightCircle}
                  boxSize="2em"
                  color={color}
                  bg={bg}
                />
              </Link>
            </Flex>
          </VStack>
        </Flex>
      </MotionCard>
    </>
  );
};

export default ProjectCard;
