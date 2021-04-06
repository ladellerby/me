import {
  useColorModeValue,
  HTMLChakraProps,
  chakra,
  Flex,
  Icon,
  Link,
  VStack,
  Text,
  Box,
  Heading,
  Spacer,
  ScaleFade,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import router from "next/router";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionCardProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionCard: React.FC<MotionCardProps> = motion(chakra.div);

type LinkCardProps = {
  website: string;
  name: string;
  description: string;
  tags: string[];
};

const LinkCard = (props: LinkCardProps) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  const { website, name, description, tags } = props;

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
        transition={{ duration: 0.75 }}
      >
        <Flex h="100%" w="100%" alignitems="center" justifyContent="center">
          <VStack h="100%" w="100%" alignitems="center" justifyContent="center">
            <Spacer />
            <Box pl="20px" maxW="32rem">
              <ScaleFade initialScale={0.2} in={true}>
                <Heading noOfLines={3} color={color} bg={bg} mb={4}>
                  {name}
                </Heading>
                <Text
                  noOfLines={3}
                  pr="4px"
                  color={color}
                  bg={bg}
                  fontSize="lg"
                >
                  {description}
                </Text>
                <Spacer />
                <Box d="flex" mt="2" alignItems="center">
                  <HStack wrap="wrap">
                    {tags?.slice(0, 3).map((tag) => (
                      <Badge borderRadius="full" px="2" colorScheme="gray">
                        {tag}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              </ScaleFade>
            </Box>
            <Spacer />
            <Flex pb="18px" pr="20px" alignSelf="flex-end">
              <Link onClick={() => router.push(website)} color={color} bg={bg}>
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

export default LinkCard;
