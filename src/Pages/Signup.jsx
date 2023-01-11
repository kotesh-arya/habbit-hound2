import React from "react";
import { useState } from "react";
import {
  Container,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

  return (
    <Box height={"100vh"} backgroundColor={bgColor}>
      <Navbar />
      <Container maxW="container.xl" p={0}>
        <Flex
          h="90vh"
          paddingTop={"4rem"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Flex
            borderRadius={20}
            boxShadow="2xl"
            border={"1px solid gray"}
            w="28rem"
            display={"flex"}
            padding={"1rem 2rem"}
            flexDirection={"column"}
          >
            <Heading size="xl" marginX={"auto"} marginY="3">
              Signup
            </Heading>
            <form onSubmit={(e) => e.preventDefault()}>
              <Box
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                width="100%"
              >
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input type={"text"} name="firstname" placeholder="Kotesh" />
                </FormControl>

                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input type={"text"} name="lastname" placeholder="Mudila" />
                </FormControl>

                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type={"text"}
                    name="username"
                    placeholder="kotesharya@gmail.com"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type={"password"}
                    name="password"
                    placeholder="********"
                  />
                </FormControl>

                <Box width={"100%"} padding={"1rem 0"} marginTop={"2rem"}>
                  <Button
                    bg={"#F6E05E"}
                    color="black"
                    width={"100%"}
                    marginBottom={"1rem"}
                  >
                    Signup
                  </Button>

                  <Button
                    as={Link}
                    to="/"
                    outline={"1px #F6E05E "}
                    variant="outline"
                    color="#F6E05E"
                    width={"100%"}
                  >
                    Already have an Account
                  </Button>
                </Box>
              </Box>
            </form>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export { SignUp };
