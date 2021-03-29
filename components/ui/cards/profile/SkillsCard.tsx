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
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import { SiCodeforces } from "react-icons/si";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import router from "next/router";

import resume from "../../../../resume.json";
import { PieChart, Pie } from "recharts";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

const SkillCardFront = (props: any) => {
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
      transition={{ duration: 0.8 }}
    >
      <Flex h="100%" w="100%" alignitems="center" justifyContent="center">
        <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
          <Spacer />
          <Box>
            <ScaleFade initialScale={0.2} in={true}>
              <Icon boxSize="10em" color={color} bg={bg} as={SiCodeforces} />
              <Heading textAlign="center" color={color} bg={bg} mb={4}>
                Skills
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

const SkillCardBack = (props: any) => {
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
          <Box pt="60px" onClick={onOpen}>
            <PieChart width={175} height={175}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill={color}
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill={color}
                label
              />
            </PieChart>
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

const SkillsCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={0.6}
        flipSpeedFrontToBack={0.6}
      >
        <SkillCardFront
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
        <SkillCardBack
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
      </ReactCardFlip>
    </>
  );
};

export default SkillsCard;
