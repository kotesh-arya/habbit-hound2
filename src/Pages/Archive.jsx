import { Box, Button, Heading, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { HabitComponent } from "../Components/HabitComponent";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";

function Archive() {
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
          <Grid width={"90%"} gridGap={"1rem"} gridTemplateColumns={"2fr 2fr"}>
            <HabitComponent />
            <HabitComponent />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export { Archive };
