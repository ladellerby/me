import { Icon, HStack, useColorModeValue, Link } from "@chakra-ui/react";
import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const SocialIcons = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("primary.800", "white");
  const boxSize = 6;
  return (
    <HStack background={bg}>
      <Link href="https://www.instagram.com/ladellerby/">
        <Icon
          as={FaInstagram}
          color={color}
          background={bg}
          boxSize={boxSize}
        />
      </Link>
      <Link href="https://github.com/ladellerby">
        <Icon as={FaGithub} color={color} background={bg} boxSize={boxSize} />
      </Link>
      <Link href="https://www.linkedin.com/in/ladellerbyjr/">
        <Icon as={FaLinkedin} color={color} background={bg} boxSize={boxSize} />
      </Link>
      <Link href="emailto:ladellerby@gmail.com">
        <Icon as={FaEnvelope} color={color} background={bg} boxSize={boxSize} />
      </Link>
      <Link href="tel:‪805-253-3528‬">
        <Icon as={FaPhone} color={color} background={bg} boxSize={boxSize} />
      </Link>
    </HStack>
  );
};

export default SocialIcons;
