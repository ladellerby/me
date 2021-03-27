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
  ModalHeader,
  ModalOverlay,
  Box,
  Heading,
  Spacer,
  ScaleFade,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import { ArrowForwardIcon, AtSignIcon } from "@chakra-ui/icons";
import router from "next/router";

import resume from "../../../../resume.json";
import { FaRegIdBadge } from "react-icons/fa";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

const ExperienceCardFront = (props: any) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const { flipCard } = props;
  return (
    <MotionCard
      zIndex={99}
      borderWidth="1px"
      borderColor={color}
      height={["325px", "325px", "325px", "325px"]}
      width={["325px", "325px", "325px", "325px"]}
      bg={bg}
      borderRadius="12px"
      animate={{ scale: [1.2, 0.9, 1] }}
      transition={{ duration: 0.75 }}
    >
      <Flex h="100%" w="100%" alignitems="center" justifyContent="center">
        <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
          <Spacer />
          <Box maxW="32rem">
            <ScaleFade initialScale={0.2} in={true}>
              <Heading color={color} bg={bg} mb={4}>
                <Icon as={FaRegIdBadge} /> QA Engineer
              </Heading>
              <Text color={color} bg={bg} fontSize="xl">
                <AtSignIcon />
                <Link> MINDBODY, Inc.</Link>
              </Text>
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

const ExperienceCardBack = (props: any) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const colorScheme = useColorModeValue("black", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { flipCard } = props;

  return (
    <>
      <Modal
        scrollBehavior="inside"
        size="xl"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent color={color} bg={bg}>
          <ModalHeader>Experiences</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              h="100%"
              w="100%"
              alignitems="center"
              justifyContent="center"
            >
              <Spacer />

              <ScaleFade initialScale={0.2} in={true}>
                {resume.work.map((workItem) => {
                  return (
                    <>
                      <Heading fontSize="20px" color={color} bg={bg} mb={4}>
                        {workItem.position} (
                        <Link href={workItem.url}>{workItem.name}</Link>)
                      </Heading>
                      <Heading fontSize="15px" color={color} bg={bg} mb={4}>
                        {workItem.startDate} -{" "}
                        {workItem.endDate ? workItem.endDate : "Current"}
                      </Heading>
                      <Text pb={5}>{workItem.summary}</Text>
                      <Spacer />
                    </>
                  );
                })}
              </ScaleFade>

              <Spacer />
            </VStack>
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
        height={["325px", "325px", "325px", "325px"]}
        width={["325px", "325px", "325px", "325px"]}
        bg={bg}
        borderRadius="12px"
      >
        <Flex h="100%" w="100%">
          <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
            <Spacer />
            <Box px="16px" maxW="32rem">
              <ScaleFade initialScale={0.2} in={true}>
                <Heading fontSize="46px" color={color} bg={bg} mb={4}>
                  Experiences
                </Heading>

                {resume.work.slice(0, 1).map((workItem) => {
                  return (
                    <>
                      <Heading fontSize="20px" color={color} bg={bg} mb={4}>
                        {workItem.position} (
                        <Link href={workItem.url}>{workItem.name}</Link>)
                      </Heading>
                      <Heading fontSize="15px" color={color} bg={bg} mb={4}>
                        {workItem.startDate} -{" "}
                        {workItem.endDate ? workItem.endDate : "Current"}
                      </Heading>
                      <Text noOfLines={2}>{workItem.summary}</Text>
                      <Spacer />
                    </>
                  );
                })}
                <Box pt={5}>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme={colorScheme}
                    variant="outline"
                    onClick={onOpen}
                  >
                    More
                  </Button>
                </Box>
              </ScaleFade>
            </Box>
            <Spacer />
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
          </VStack>
        </Flex>
      </MotionCard>
    </>
  );
};

const ExperienceCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={0.6}
        flipSpeedFrontToBack={0.6}
      >
        <ExperienceCardFront
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
        <ExperienceCardBack
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
      </ReactCardFlip>
    </>
  );
};

export default ExperienceCard;
