import {
  useColorModeValue,
  HTMLChakraProps,
  chakra,
  Icon,
  Flex,
  Link,
  VStack,
  Spacer,
  Center,
  Box,
  ScaleFade,
  Heading,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import SpotifyPlayer from "react-spotify-player";
import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

import ReactCardFlip from "react-card-flip";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

const SpotifyCardFront = (props: any) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const { flipCard } = props;
  return (
    <>
      <MotionCard
        zIndex={99}
        borderWidth="1px"
        borderColor={color}
        height={["350px", "350px", "350px", "350px"]}
        width={["350px", "350px", "350px", "350px"]}
        bg={bg}
        borderRadius="12px"
        animate={{ scale: [1.2, 0.9, 1] }}
        transition={{ duration: 1 }}
      >
        <Flex h="100%" w="100%" alignitems="center" justifyContent="center">
          <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
            <Spacer />
            <Box>
              <ScaleFade initialScale={0.2} in={true}>
                <Center>
                  <Icon boxSize="10em" color={color} bg={bg} as={FaSpotify} />
                </Center>
                <Center>
                  <Heading textAlign="center" color={color} bg={bg} mb={4}>
                    #InRotation
                  </Heading>
                </Center>
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
    </>
  );
};
const SpotifyCardBack = () => {
  const bg = useColorModeValue("white", "gray.900");

  const size = {
    width: "350px",
    height: "350px",
  };

  return (
    <>
      <MotionCard
        zIndex={3}
        borderWidth="1px"
        height={["350px", "350px", "350px", "350px"]}
        width={["350px", "350px", "350px", "350px"]}
        bg={bg}
        borderRadius="12px"
        //animate={{ scale: [0.9, 1.2, 1] }}
        //transition={{ duration: 1.1 }}
      >
        <SpotifyPlayer
          uri="spotify:playlist:0oifNLCtawCpS7HkfcaWkK"
          size={size}
          view="list"
          theme="white"
          id="spotify-player"
        ></SpotifyPlayer>
      </MotionCard>
      <style global jsx>{`
        .SpotifyPlayer {
          border-radius: 12px;
          z-index: 99;
        }
      `}</style>
    </>
  );
};

const SpotifyCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <ReactCardFlip
        //cardZIndex="99"
        isFlipped={flipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={0.6}
        flipSpeedFrontToBack={0.6}
      >
        <SpotifyCardFront
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
        <SpotifyCardBack />
      </ReactCardFlip>
    </>
  );
};

export default SpotifyCard;
