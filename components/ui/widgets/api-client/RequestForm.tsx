import { InfoOutlineIcon } from "@chakra-ui/icons";
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
  const bg = useColorModeValue("white", "gray.900");
  const badges = useColorModeValue("blackAlpha", "whiteAlpha");

  return (
    <Box width="100%" outline="5px" outlineColor="whiteAlpha.100">
      <form id="apiRequest" onSubmit={onSubmit}>
        <Stack spacing="10px">
          <HStack>
            <FormControl>
              <Tooltip
                label="An API endpoint is basically a fancy word for a URL of a server or service you wish to Create, Retrieve, Update, or Delete data from."
                placement="top-start"
                openDelay={500}
                color={color}
                bg={bg}
              >
                <FormLabel>
                  <HStack>
                    <Badge variant="outline" colorScheme={badges}>
                      Endpoint
                    </Badge>
                    <InfoOutlineIcon />
                  </HStack>
                </FormLabel>
              </Tooltip>
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
                  color={color}
                  bg={bg}
                />
              </InputGroup>
            </FormControl>
          </HStack>
          <FormControl>
            <Tooltip
              label="HTTP Headers are an important part of the API request and response as they represent the meta-data associated with the API request and response. ... Headers carry information for: Request and Response Body. Request Authorization."
              placement="top-start"
              openDelay={500}
              color={color}
              bg={bg}
            >
              <FormLabel>
                <HStack>
                  <Badge variant="outline" colorScheme={badges}>
                    Request Headers
                  </Badge>
                  <InfoOutlineIcon />
                </HStack>
              </FormLabel>
            </Tooltip>
            <InputGroup>
              <Textarea
                placeholder="//Enter headers in the following format 'Api-Key:0ee8f976-cdf2-48b7-8baf-ff17900ab8a4'"
                name="content"
                id="requestHeaders"
                color={color}
                bg={bg}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <Tooltip
              color={color}
              bg={bg}
              label="A request body is data sent by the client to the API."
              placement="top-start"
              openDelay={500}
            >
              <FormLabel>
                <HStack>
                  <Badge variant="outline" colorScheme={badges}>
                    Request Body
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
                id="requestbody"
                color={color}
                bg={bg}
              />
            </InputGroup>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};

export default RequestForm;
