import {
  useColorModeValue,
  HTMLChakraProps,
  chakra,
  Flex,
  Icon,
  Link,
  VStack,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Heading,
  Spacer,
  ScaleFade,
  Text,
  HStack,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import { RiCodeBoxFill } from "react-icons/ri";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { FaGitSquare } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import router from "next/router";

import resume from "../../../../resume.json";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

const ProjectsCardFront = (props: any) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const { flipCard } = props;
  return (
    <MotionCard
      zIndex={99}
      borderWidth="1px"
      borderColor={color}
      height={["350px", "350px", "350px", "350px"]}
      width={["350px", "350px", "350px", "350px"]}
      bg={bg}
      borderRadius="12px"
      animate={{ scale: [1.2, 0.9, 1] }}
      transition={{ duration: 0.95 }}
    >
      <Flex h="100%" w="100%" alignitems="center" justifyContent="center">
        <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
          <Spacer />
          <Box>
            <ScaleFade initialScale={0.2} in={true}>
              <Icon boxSize="10em" color={color} bg={bg} as={RiCodeBoxFill} />
              <Heading textAlign="center" color={color} bg={bg} mb={4}>
                Projects
              </Heading>
            </ScaleFade>
          </Box>
          <Spacer />
          <Flex pb="18px" pr="20px" alignSelf="flex-end">
            <Link onClick={flipCard} color={color} bg={bg}>
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
  );
};

const ProjectsCardBack = (props: any) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const colorScheme = useColorModeValue("black", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { flipCard, resume } = props;

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={color} bg={bg}>
          <ModalHeader>Projects</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {resume.projects.map((project: any) => {
              return (
                <>
                  <Heading fontSize="20px" color={color} bg={bg} mb={2}>
                    <HStack>
                      <Link href={project.website}>{project.name}</Link>
                      <Link href={project.url}>
                        <Icon as={FaGitSquare} />
                      </Link>
                    </HStack>
                  </Heading>
                  <Heading fontSize="15px" color={color} bg={bg}>
                    <HStack></HStack>
                  </Heading>
                  <Text mb={4}>{project.description}</Text>
                </>
              );
            })}
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              colorScheme={colorScheme}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme={colorScheme}
              variant="outline"
              onClick={() => {
                router.push("/api/resume");
              }}
            >
              Resume
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
      >
        <Flex h="100%" w="100%">
          <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
            <Spacer />
            <Box px="16px" maxW="32rem">
              <ScaleFade initialScale={0.2} in={true}>
                <Heading fontSize="26px" color={color} bg={bg} mb={4}>
                  Projects
                </Heading>

                {resume.projects.slice(0, 1).map((project: any) => {
                  return (
                    <>
                      <Heading fontSize="20px" color={color} bg={bg} mb={4}>
                        <HStack>
                          <Link href={project.website}>{project.name}</Link>
                          <Link href={project.url}>
                            <Icon as={FaGitSquare} />
                          </Link>
                        </HStack>
                      </Heading>
                      <Heading fontSize="15px" color={color} bg={bg}>
                        <HStack></HStack>
                      </Heading>
                      <Text noOfLines={4}>{project.description}</Text>
                      <Spacer />
                    </>
                  );
                })}
              </ScaleFade>
            </Box>
            <Spacer />
            <Flex>
              <HStack spacing={90}>
                <Flex pb="18px" pl="20px" alignSelf="flex-start">
                  <Link onClick={flipCard} color={color} bg={bg}>
                    <Icon
                      as={FiArrowLeftCircle}
                      boxSize="2em"
                      color={color}
                      bg={bg}
                    />
                  </Link>
                </Flex>
                <Spacer />
                <Flex pb="18px" pr="20px" alignSelf="flex-end">
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme={colorScheme}
                    variant="outline"
                    onClick={onOpen}
                  >
                    More
                  </Button>
                </Flex>
              </HStack>
            </Flex>
          </VStack>
        </Flex>
      </MotionCard>
    </>
  );
};

const ProjectsCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={0.6}
        flipSpeedFrontToBack={0.6}
      >
        <ProjectsCardFront
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
        <ProjectsCardBack
          resume={resume}
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
      </ReactCardFlip>
    </>
  );
};

export default ProjectsCard;
