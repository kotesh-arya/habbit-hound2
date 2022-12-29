import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { LabelComponent } from "../Components/LabelComponent";
import { Navbar } from "../Components/Navbar";
import { NewLabelModal } from "../Components/NewLabelModal";
import { Sidebar } from "../Components/Sidebar";

function Labels() {
  return (
    <Box>
      <Navbar />
      <Box display={"flex"} paddingTop={"1rem"} flexDir={"row"}>
        <Sidebar />

        <Box
          display={"flex"}
          flexDir="column"
          alignItems={"center"}
          width={"100%"}
        >
          <NewLabelModal />
          <Grid width={"90%"} gridGap={"1rem"} gridTemplateColumns={"2fr 2fr"}>
            <LabelComponent />
            <LabelComponent />
            <LabelComponent />
            <LabelComponent />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export { Labels };
