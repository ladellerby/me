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
  const badges = useColorModeValue("blackAlpha", "whiteAlpha");

  return (
    <Box width="100%" outline="5px" outlineColor="whiteAlpha.100">
      <Stack spacing="10px">
        <HStack>
          <FormControl alignItems="revert" id="status-textarea">
            <FormLabel>
              <Badge variant="outline" colorScheme={badges}>
                Status
              </Badge>
            </FormLabel>
            <InputGroup>
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
            label="HTTP Headers are an important part of the API request and response as they represent the meta-data associated with the API request and response. ... Headers carry information for: Request and Response Body. Request Authorization."
            placement="top-start"
            openDelay={500}
          >
            <FormLabel>
              <Badge variant="outline" colorScheme={badges}>
                Response Headers
              </Badge>
            </FormLabel>
          </Tooltip>
          <InputGroup>
            <Textarea
              disabled={true}
              name="content"
              id="responseHeaders-textarea"
              color={color}
            />
          </InputGroup>
        </FormControl>
        <FormControl id="responseBody">
          <Tooltip
            label="HTTP Headers are an important part of the API request and response as they represent the meta-data associated with the API request and response. ... Headers carry information for: Request and Response Body. Request Authorization."
            placement="top-start"
            openDelay={500}
          >
            <FormLabel>
              <Badge variant="outline" colorScheme={badges}>
                Response Body
              </Badge>
            </FormLabel>
          </Tooltip>
          <InputGroup>
            <Textarea
              //overflowY="scroll"
              rows={20}
              name="content"
              id="responseBody-textarea"
              color={color}
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
