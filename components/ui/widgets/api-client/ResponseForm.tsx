import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Textarea,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type ResponseFormProps = {
  responseBody: any;
  responseTime: any;
  responseStatus: any;
};
const ResponseForm = (props: ResponseFormProps) => {
  const { responseBody, responseTime, responseStatus } = props;
  const color = useColorModeValue("gray.900", "white");
  const bg = useColorModeValue("white", "gray.900");

  const badges = useColorModeValue("blackAlpha", "whiteAlpha");

  return (
    <Box width="100%" outline="5px" outlineColor="whiteAlpha.100">
      <Stack spacing="10px">
        <HStack>
          <FormControl alignItems="revert" id="status-textarea">
            <Tooltip
              label="HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes: Informational responses (100–199), Successful responses (200–299),
          Redirects (300–399), Client errors (400–499), and Server errors (500–599)"
              placement="top-start"
              openDelay={500}
              color={color}
              bg={bg}
            >
              <FormLabel>
                <HStack>
                  <Badge variant="outline" colorScheme={badges}>
                    Status
                  </Badge>
                  <InfoOutlineIcon />
                </HStack>
              </FormLabel>
            </Tooltip>
            <InputGroup color={color} bg={bg}>
              <InputRightElement
                width="100px"
                paddingRight="20px"
                children={
                  <HStack>
                    <Badge variant="outline" colorScheme="yellow">
                      {responseTime} ms
                    </Badge>
                    <Badge variant="outline" colorScheme="green">
                      {responseStatus}
                    </Badge>
                  </HStack>
                }
              />
              <Input
                paddingRight="100px"
                type="text"
                isDisabled={true}
                defaultValue=""
                textAlign="right"
              />
            </InputGroup>
          </FormControl>
        </HStack>
        <FormControl id="responseHeaders">
          <Tooltip
            color={color}
            bg={bg}
            label="Response headers, like Age, Location or Server are used to give a more detailed context of the response."
            placement="top-start"
            openDelay={500}
          >
            <FormLabel>
              <HStack>
                <Badge variant="outline" colorScheme={badges}>
                  Response Headers
                </Badge>
                <InfoOutlineIcon />
              </HStack>
            </FormLabel>
          </Tooltip>
          <InputGroup color={color} bg={bg}>
            <Textarea
              disabled={true}
              name="content"
              id="responseHeaders-textarea"
            />
          </InputGroup>
        </FormControl>
        <FormControl id="responseBody">
          <Tooltip
            color={color}
            bg={bg}
            label="Response Body contains the resource data that was requested by the client."
            placement="top-start"
            openDelay={500}
          >
            <FormLabel>
              <HStack>
                <Badge variant="outline" colorScheme={badges}>
                  Response Body
                </Badge>
                <InfoOutlineIcon />
              </HStack>
            </FormLabel>
          </Tooltip>
          <InputGroup>
            <Textarea
              //overflowY="scroll"
              rows={20}
              name="content"
              id="responseBody-textarea"
              color={color}
              bg={bg}
              value={responseBody}
              defaultValue=""
            />
          </InputGroup>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default ResponseForm;
