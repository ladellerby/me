import { useColorModeValue, HTMLChakraProps, chakra } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import SpotifyPlayer from "react-spotify-player";
import React from "react";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

const SpotifyCard = () => {
  const bg = useColorModeValue("white", "gray.900");

  const size = {
    width: "325px",
    height: "325px",
  };

  return (
    <>
      <MotionCard
        zIndex={99}
        borderWidth="1px"
        //borderColor={color}
        height={["325px", "325px", "325px", "325px"]}
        width={["325px", "325px", "325px", "325px"]}
        bg={bg}
        borderRadius="12px"
        whileHover={{ scale: 1.1 }}
      >
        <SpotifyPlayer
          uri="spotify:playlist:0oifNLCtawCpS7HkfcaWkK"
          size={size}
          view="list"
          theme="white"
          id="spotify-player"
        />
      </MotionCard>
      <style global jsx>{`
        .SpotifyPlayer {
          border-radius: 12px;
        }
      `}</style>
    </>
  );
};

export default SpotifyCard;
