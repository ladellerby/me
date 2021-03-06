import {
  useColorModeValue,
  HTMLChakraProps,
  chakra,
  Flex,
  Icon,
  Link,
  VStack,
  Box,
  Heading,
  Spacer,
  ScaleFade,
  Grid,
  Center,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { FaHiking, FaRecordVinyl } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import resume from "../../../../resume.json";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

const HobbiesCardFront = (props: any) => {
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
      transition={{ duration: 0.9 }}
    >
      <Flex h="100%" w="100%" alignitems="center" justifyContent="center">
        <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
          <Center pt="25px">
            <Box>
              <ScaleFade initialScale={0.2} in={true}>
                <Grid bg={bg} templateColumns="repeat(2, 1fr)" gap={1}>
                  <Icon viewBox="0 0 128 128" boxSize="5em">
                    <path
                      fill="currentColor"
                      d="m121.5 56.25h-6.942v-8.4a7.759 7.759 0 0 0 -7.75-7.75h-4.346a7.755 7.755 0 0 0 -7.654-6.6h-6a1.749 1.749 0 0 0 -1.75 1.75v21h-46.116v-21a1.749 1.749 0 0 0 -1.75-1.75h-6a7.755 7.755 0 0 0 -7.654 6.6h-4.346a7.759 7.759 0 0 0 -7.75 7.75v8.4h-6.942a1.749 1.749 0 0 0 -1.75 1.75v12a1.749 1.749 0 0 0 1.75 1.75h6.942v8.4a7.759 7.759 0 0 0 7.75 7.75h4.346a7.755 7.755 0 0 0 7.654 6.6h6a1.749 1.749 0 0 0 1.75-1.75v-21h46.116v21a1.749 1.749 0 0 0 1.75 1.75h6a7.755 7.755 0 0 0 7.654-6.6h4.346a7.759 7.759 0 0 0 7.75-7.75v-8.4h6.942a1.749 1.749 0 0 0 1.75-1.75v-12a1.749 1.749 0 0 0 -1.75-1.75zm-113.25 12v-8.5h5.192v8.5zm8.692 11.9v-32.3a4.255 4.255 0 0 1 4.25-4.25h4.25v40.8h-4.25a4.255 4.255 0 0 1 -4.25-4.249zm16.25 10.85a4.255 4.255 0 0 1 -4.25-4.25v-45.5a4.255 4.255 0 0 1 4.25-4.25h4.25v20.981.019.019 11.962.019.019 20.981zm7.75-22.75v-8.5h46.116v8.5zm58.116 18.5a4.255 4.255 0 0 1 -4.25 4.25h-4.25v-20.981-.019-.019-11.962-.019-.019-20.981h4.25a4.255 4.255 0 0 1 4.25 4.25zm12-6.6a4.255 4.255 0 0 1 -4.25 4.25h-4.25v-40.8h4.25a4.255 4.255 0 0 1 4.25 4.25zm8.692-11.9h-5.192v-8.5h5.192z"
                    />
                  </Icon>
                  <Icon
                    boxSize="5em"
                    color={color}
                    bg={bg}
                    as={FaRecordVinyl}
                  />
                  <Icon boxSize="5em" color={color} bg={bg} as={GiHamburger} />
                  <Icon boxSize="5em" color={color} bg={bg} as={FaHiking} />
                </Grid>
                <Heading textAlign="center" color={color} bg={bg} mb={4}>
                  Hobbies
                </Heading>
              </ScaleFade>
            </Box>
          </Center>
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

const HobbiesCardBack = (props: any) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const HobbiesSlider = withAutoplay(AwesomeSlider);

  const { flipCard } = props;

  return (
    <>
      <MotionCard
        borderWidth="1px"
        borderColor={color}
        height={["350px", "350px", "350px", "350px"]}
        width={["350px", "350px", "350px", "350px"]}
        bg={bg}
        borderRadius="12px"
      >
        <Flex h="100%" w="100%">
          <HobbiesSlider
            className="hobbies-slider"
            organicArrows={false}
            infinite={true}
            play={true}
            interval={3600}
            bullets={false}
            mobileTouch={true}
            customContent={
              <>
                <Spacer />
                <Flex
                  pt={["30px", "10px", "80px", "75px"]}
                  zIndex={99}
                  pb="18px"
                  pl="20px"
                  alignSelf="flex-start"
                >
                  <Link zIndex={99} onClick={flipCard} color={color}>
                    <Icon
                      zIndex={99}
                      as={FiArrowLeftCircle}
                      boxSize="2em"
                      color={color}
                    />
                  </Link>
                </Flex>
              </>
            }
          >
            <div data-src="https://media.giphy.com/media/ujygH8l79xR9m/giphy.gif"></div>
            <div data-src="https://media.giphy.com/media/REPL2BIiGhyFO/giphy.gif"></div>

            <div data-src="https://media.giphy.com/media/CNocEFcF9IBegtgW3q/giphy.gif"></div>

            <div data-src="https://media.giphy.com/media/5nkQmGl85Uaa5rbMh1/giphy.gif"></div>
            <div data-src="https://media.giphy.com/media/TjM628jLdpJqHtpe2Q/giphy.gif"></div>
          </HobbiesSlider>
        </Flex>
      </MotionCard>
      <style global jsx>{`
        .awssld__wrapper {
          border-radius: 12px;
        }
      `}</style>
    </>
  );
};

const HobbiesCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={0.6}
        flipSpeedFrontToBack={0.6}
      >
        <HobbiesCardFront
          flipCard={() => {
            setFlipped(!flipped);
          }}
        />
        <HobbiesCardBack
          resume={resume}
          flipCard={() => {
            setFlipped(false);
          }}
        />
      </ReactCardFlip>
    </>
  );
};

export default HobbiesCard;
