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
import { MdLocationOn } from "react-icons/md";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import router from "next/router";

import resume from "../../../../resume.json";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

const SummaryCardFront = (props: any) => {
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
      transition={{ duration: 0.75 }}
    >
      <Flex h="100%" w="100%" alignitems="center" justifyContent="center">
        <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
          <Spacer />
          <Box pl="20px" maxW="32rem">
            <ScaleFade initialScale={0.2} in={true}>
              <Heading color={color} bg={bg} mb={4}>
                Full Stack Web Experience
              </Heading>
              <Text color={color} bg={bg} fontSize="xl">
                <Icon
                  color={color}
                  bg={bg}
                  boxSize="1em"
                  as={MdLocationOn}
                ></Icon>
                San Luis Obispo, CA
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

const SummaryCardBack = (props: any) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const colorScheme = useColorModeValue("black", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { flipCard } = props;

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={color} bg={bg}>
          <ModalHeader>Summary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{resume.basics.summary}</ModalBody>
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
        <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
          <Spacer />
          <Box pl="20px" maxW="32rem">
            <Heading size="lg" color={color} bg={bg} mb={4} pr="8px">
              Exploring <b>Code</b>, <b>Content</b>, and <b>Community</b> to
              create value worldwide.
            </Heading>
            <Spacer />
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme={colorScheme}
              variant="outline"
              onClick={onOpen}
            >
              More
            </Button>
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
      </MotionCard>
    </>
  );
};

const SummaryCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={0.6}
        flipSpeedFrontToBack={0.6}
      >
        <SummaryCardFront
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
        <SummaryCardBack
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
      </ReactCardFlip>
    </>
  );
};

export default SummaryCard;
