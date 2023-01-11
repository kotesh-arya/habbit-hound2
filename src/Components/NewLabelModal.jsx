import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { BiTargetLock } from "react-icons/bi";

function NewLabelModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contentData, setContentData] = useState({
    // firstname: user.firstname,
    // lastname: user.lastname,
    content: "",
  });
  return (
    <>
      <Button margin={"10px auto"} onClick={onOpen}>
        <Text marginRight={"10px"}>Create a new Label</Text>{" "}
        <BiTargetLock margin={"auto"} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Label</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={(e) => e.preventDefault()}>
              <Box
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                width="100%"
              >
                <Box
                  width={"100%"}
                  padding={"1rem 0"}
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"flex-end"}
                >
                  <Textarea
                    onChange={(e) => {
                      setContentData((prev) => {
                        return { ...prev, content: e.target.value };
                      });
                    }}
                    resize={"none"}
                  />{" "}
                  <Button
                    bg={"#F6E05E"}
                    color="black"
                    width={"20%"}
                    marginBottom={"1rem"}
                    onClick={() => {
                      onClose();
                    }}
                  >
                    CREATE
                  </Button>
                </Box>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { NewLabelModal };
