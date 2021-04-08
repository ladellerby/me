import {
  useColorModeValue,
  HTMLChakraProps,
  chakra,
  Flex,
  Kbd,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import useSound from "use-sound";
import React from "react";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionButtonProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionButton: React.FC<MotionButtonProps> = motion(chakra.div);

type SoundPadProps = {
  buttonName: string;
  keyName: string;
  sound: string;
};

const SoundPad = (props: SoundPadProps) => {
  const [play, { stop }]: any = useSound(`/sounds/${props.sound}.mp3`);
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");

  return (
    <MotionButton
      onClick={() => {
        stop();
        play();
      }}
      zIndex={99}
      borderWidth="1px"
      borderColor={color}
      height={["325px", "325px", "325px", "325px"]}
      width={["325px", "325px", "325px", "325px"]}
      bg={bg}
      borderRadius="12px"
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: [1, 0.5, 1, 1, 0.5, 0.5],
      }}
    >
      <Flex>
        <Kbd
          color={color}
          bg={bg}
          display={["none", "none", "none"]}
          h="40px"
          w="40px"
        >
          {props.keyName}
        </Kbd>
      </Flex>
    </MotionButton>
  );
};

export default SoundPad;
