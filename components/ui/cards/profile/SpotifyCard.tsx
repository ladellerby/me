import { useColorModeValue, HTMLChakraProps, chakra } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";

import React from "react";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

const SpotifyCard = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  return (
    <MotionCard
      zIndex={99}
      borderWidth="1px"
      borderColor={color}
      height={["325px", "325px", "325px", "325px"]}
      width={["325px", "325px", "325px", "325px"]}
      bg={bg}
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: [1, 2, 2, 1, 1],
      }}
    ></MotionCard>
  );
};

export default SpotifyCard;
