import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { HabitComponent } from "../Components/HabitComponent";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";
import { BiTargetLock } from "react-icons/bi";
import { NewHabitModal } from "../Components/NewHabitModal";
function Home() {
  return (
    <Box
    // bg={"green"}
    >
      <Navbar />
      <Box
        display={"flex"}
        // bg={"blue"}
        paddingTop={"1rem"}
        flexDir={"row"}
      >
        <Sidebar />
        <Box
          display={"flex"}
          flexDir="column"
          alignItems={"center"}
          width={"100%"}
        >
          <NewHabitModal />

          <Grid width={"90%"} gridGap={"1rem"} gridTemplateColumns={"2fr 2fr"}>
            <HabitComponent />
            <HabitComponent />
            <HabitComponent />
            <HabitComponent />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export { Home };
