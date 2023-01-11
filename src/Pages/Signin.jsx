import React, { useState } from "react";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/hound-one.png";
import { Image } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";

function SignIn() {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

  return (
    <Box backgroundColor={bgColor}>
      <Navbar />
      <Container
        // bg={"blue"}
        maxW="container.xl"
        p={0}
      >
        <Flex h="85vh" justifyContent="center" alignItems={"center"}>
          <VStack
            borderRadius={20}
            h="full"
            py={10}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Image
                src={Logo}
                width="600px"
                objectFit="contain"
                alt="Buddy-zone-logo"
              />
              <Text as="strong" fontSize={20}>
                Habits don't restrict freedom, they create it
              </Text>
            </Box>
          </VStack>
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
              Signin
            </Heading>
            <form onSubmit={(e) => e.preventDefault()}>
              <Box
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                width="100%"
              >
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
                    SignIn
                  </Button>

                  <Button
                    as={Link}
                    to="/signup"
                    outline={"1px #F6E05E "}
                    variant="outline"
                    color="black"
                    width={"100%"}
                    marginBottom={"1rem"}
                  >
                    Create Account
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    bg={"#F6E05E"}
                    color="black"
                    width={"100%"}
                  >
                    Guest Login
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

export { SignIn };
