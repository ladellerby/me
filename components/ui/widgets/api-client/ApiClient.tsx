import { Box, Button, HStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import RequestForm from "./RequestForm";
import ResponseForm from "./ResponseForm";

const ApiClient = () => {
  const [msg, setMsg] = useState({ message: "", isError: false });
  const [isSubmitting, setSubmitting] = useState(false);
  const toast = useToast();
  const [responseBody, setResponseBody] = useState({});
  const [responseStatus, setResponseStatus] = useState(0);
  const [responseTime, setResponseTime] = useState(0);

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

  return (
    <Box width="container.xl">
      <HStack>
        <RequestForm onSubmit={sendApiRequest} />
        <ResponseForm
          responseBody={responseBody}
          responseTime={responseTime}
          responseStatus={responseStatus}
        />
      </HStack>
      <HStack p="5" justifyContent="flex-end" spacing="15px">
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
          mr={3}
          form="apiRequest"
          isLoading={isSubmitting}
          loadingText="Please wait.."
          type="submit"
        >
          Send
        </Button>
      </HStack>
    </Box>
  );
};

export default ApiClient;
