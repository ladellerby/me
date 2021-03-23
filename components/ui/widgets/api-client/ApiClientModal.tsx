import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import RequestForm from "./RequestForm";
import ResponseForm from "./ResponseForm";

const ApiClientModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "gray.900");
  const httpBg = useColorModeValue("white", "black");
  const color = useColorModeValue("gray.900", "white");
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
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        size="sm"
        rounded="md"
        color={color}
        bg={bg}
        _hover={{
          bg: { bg },
          color: { color },
        }}
      >
        API
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="6xl"
      >
        <ModalOverlay sx={{ backgroundColor: { httpBg } }} />
        <ModalContent rounded="md" sx={{ backgroundColor: { httpBg } }}>
          <ModalHeader>Http Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <RequestForm onSubmit={sendApiRequest} />
              <ResponseForm
                responseBody={responseBody}
                responseTime={responseTime}
                responseStatus={responseStatus}
              />
            </HStack>
          </ModalBody>
          <ModalFooter>
            {msg.message
              ? toast({
                  title: "Stats",
                  description: msg.message,
                  status: msg.isError ? "warning" : "success",
                  duration: 2000,
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
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Copy
            </Button>
            <Button variant="ghost" colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>{" "}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ApiClientModal;
