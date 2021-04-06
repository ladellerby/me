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
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import { SiCodeforces } from "react-icons/si";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import router from "next/router";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

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
          <ModalHeader>Skills</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
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
        <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
          <Flex onClick={onOpen}></Flex>
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
