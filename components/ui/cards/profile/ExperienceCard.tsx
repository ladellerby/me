import { useColorModeValue, HTMLChakraProps, chakra } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";

import React from "react";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

const ExperienceCard = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  return (
    <MotionCard
      zIndex={99}
      borderWidth="1px"
      borderColor={color}
      height={["325px", "325px", "325px", "325px"]}
      width={["325px", "325px", "325px", "325px"]}
      borderRadius="12px"
      bg={bg}
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: [0.5, 1, 1, 0.5, 0.5],
      }}
    ></MotionCard>
  );
};

export default ExperienceCard;
