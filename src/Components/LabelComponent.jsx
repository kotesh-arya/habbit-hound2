import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { MdLabel } from "react-icons/md";

function LabelComponent() {
  return (
    <Box border={"2px solid white"} width={"5rem"} margin={"auto"}>
      <Heading>
        <MdLabel color="#F6E05E" />
      </Heading>
    </Box>
  );
}

export { LabelComponent };
