import {
  Box,
  Button,
  HStack,
  Icon,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import RequestForm from "./RequestForm";
import ResponseForm from "./ResponseForm";
import { useClipboard } from "use-clipboard-copy";
import router from "next/router";
import { FaGitSquare } from "react-icons/fa";

const ApiClient = () => {
  const [msg, setMsg] = useState({ message: "", isError: false });
  const [isSubmitting, setSubmitting] = useState(false);
  const [isCopying, setCopying] = useState(false);
  const color = useColorModeValue("gray.900", "white");
  const bg = useColorModeValue("white", "gray.900");

  const toast = useToast();
  const [responseBody, setResponseBody] = useState({});
  const [responseStatus, setResponseStatus] = useState(200);
  const [responseTime, setResponseTime] = useState(200);
  const clipboard = useClipboard({
    onSuccess() {
      toast({
        title: "Copied",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    },
    onError() {
      toast({
        title: "Copy Failed",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    },
  });

  const sendApiRequest = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    const httpMethod = e.currentTarget.httpMethod.value;
    const endpoint = e.currentTarget.endpoint.value;
    const start = performance.now();
    await fetch(endpoint, {
      method: `${httpMethod}`,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setResponseStatus(response.status);
        return response.json();
      })
      .then(function (json) {
        setResponseBody(JSON.stringify(json, null, 2));
      });

    const end = performance.now();
    setResponseTime(Math.round(end - start));

    if (responseStatus === 200) {
      setMsg({
        message: `${responseStatus} | ${responseTime} ms`,
        isError: false,
      });
      setMsg({ message: "", isError: false });
    } else if (responseStatus == 401) {
      setMsg({
        message: `${responseStatus} | ${responseTime} ms`,
        isError: true,
      });
      setMsg({ message: "", isError: false });
    } else {
      setMsg({
        message: `${responseStatus} | ${responseTime} ms`,
        isError: true,
      });
      setMsg({ message: "", isError: false });
    }
    setSubmitting(false);
  };

  const copyApiRequest = async () => {
    setCopying(true);
    clipboard.copy(`${responseBody}`);
    setCopying(false);
  };

  return (
    <>
      <Box
        display={["none", "none", "block", "block"]}
        zIndex="99"
        width="1400px"
      >
        <HStack justifyContent="flex-end" spacing="5px">
          {msg.message
            ? toast({
                title: "Sent",
                //description: msg.message,
                status: msg.isError ? "warning" : "success",
                duration: 1500,
                isClosable: true,
              })
            : null}
          <Button
            colorScheme="gray"
            form="apiRequest"
            isLoading={isSubmitting}
            loadingText="Please wait.."
            type="submit"
            variant="outline"
          >
            Send
          </Button>
          <Button
            color={color}
            bg={bg}
            loadingText="Please wait.."
            type="button"
            isLoading={isCopying}
            onClick={copyApiRequest}
            variant="outline"
          >
            Copy
          </Button>
          <Button
            rightIcon={<Icon as={FaGitSquare} />}
            color={color}
            bg={bg}
            colorScheme="gray"
            variant="outline"
            onClick={() => {
              router.push(
                "https://github.com/ladellerby/me/tree/master/components/ui/widgets/api-client"
              );
            }}
          >
            Github
          </Button>
        </HStack>
        <HStack>
          <RequestForm onSubmit={sendApiRequest} />
          <ResponseForm
            responseBody={responseBody}
            responseTime={responseTime}
            responseStatus={responseStatus}
          />
        </HStack>
      </Box>

      <Box
        display={["block", "block", "none", "none"]}
        zIndex="99"
        minW="375px"
        width="auto"
      >
        <HStack justifyContent="flex-end" spacing="5px">
          <Button
            colorScheme="gray"
            form="apiRequest"
            loadingText="Please wait.."
            type="submit"
            variant="outline"
            isLoading={isSubmitting}
            color={color}
            bg={bg}
          >
            Send
          </Button>
          <Button
            colorScheme="gray"
            loadingText="Please wait.."
            type="button"
            isLoading={isCopying}
            onClick={copyApiRequest}
            variant="outline"
            color={color}
            bg={bg}
          >
            Copy
          </Button>
          <Button
            rightIcon={<Icon as={FaGitSquare} />}
            color={color}
            bg={bg}
            colorScheme="gray"
            variant="outline"
            onClick={() => {
              router.push(
                "https://github.com/ladellerby/me/tree/master/components/ui/widgets/api-client"
              );
            }}
          >
            Github
          </Button>
        </HStack>
        <VStack>
          <RequestForm onSubmit={sendApiRequest} />
          <ResponseForm
            responseBody={responseBody}
            responseTime={responseTime}
            responseStatus={responseStatus}
          />
        </VStack>
      </Box>
    </>
  );
};

export default ApiClient;
