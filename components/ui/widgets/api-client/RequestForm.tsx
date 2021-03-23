import {
  Badge,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Textarea,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type RequestFormProps = {
  onSubmit: any;
};

const RequestForm = (props: RequestFormProps) => {
  const { onSubmit } = props;
  const color = useColorModeValue("gray.900", "white");
  const badges = useColorModeValue("blackAlpha", "whiteAlpha");

  return (
    <Box width="100%" outline="5px" outlineColor="whiteAlpha.100">
      <form id="apiRequest" onSubmit={onSubmit}>
        <Stack spacing="10px">
          <HStack>
            <FormControl>
              <FormLabel>
                <Badge variant="outline" colorScheme={badges}>
                  Endpoint
                </Badge>
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  width="100px"
                  children={
                    <FormControl>
                      <Select id="httpMethod" defaultValue="GET">
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>DELETE</option>
                      </Select>
                    </FormControl>
                  }
                />
                <Input
                  paddingLeft="115px"
                  type="text"
                  id="endpoint"
                  defaultValue="https://api.github.com/users/ladellerby/repos"
                />
              </InputGroup>
            </FormControl>
          </HStack>
          <FormControl>
            <Tooltip
              label="HTTP Headers are an important part of the API request and response as they represent the meta-data associated with the API request and response. ... Headers carry information for: Request and Response Body. Request Authorization."
              placement="top-start"
              openDelay={500}
            >
              <FormLabel>
                {" "}
                <Badge variant="outline" colorScheme={badges}>
                  Request Headers
                </Badge>
              </FormLabel>
            </Tooltip>
            <InputGroup>
              <Textarea
                placeholder="//Enter headers in the following format 'Api-Key:0ee8f976-cdf2-48b7-8baf-ff17900ab8a4'"
                name="content"
                id="requestHeaders"
                color={color}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <Tooltip
              label="HTTP Headers are an important part of the API request and response as they represent the meta-data associated with the API request and response. ... Headers carry information for: Request and Response Body. Request Authorization."
              placement="top-start"
              openDelay={500}
            >
              <FormLabel>
                <Badge variant="outline" colorScheme={badges}>
                  Request Body
                </Badge>
              </FormLabel>
            </Tooltip>
            <InputGroup>
              <Textarea
                //overflowY="scroll"
                rows={20}
                name="content"
                id="requestbody"
                color={color}
              />
            </InputGroup>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};

export default RequestForm;
