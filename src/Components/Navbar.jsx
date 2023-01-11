import React from "react";
import {
  Button,
  Flex,
  useColorMode,
  Icon,
  Image,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import Logo from "../assets/hound-one.png";
import { ImSun } from "react-icons/im";
import { Link } from "react-router-dom";
function Navbar() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "yellow.300");

  return (
    <Flex
      bg={bgColor}
      color="white"
      width={"100%"}
      justifyContent="space-between"
      px={2}
      py={0}
      boxShadow="md"
    >
      <Box as={Link} to="/home">
        <Image
          src={Logo}
          boxSize="100px"
          objectFit="contain"
          alt="Buddy-zone-logo"
        />
      </Box>
      <Box>
        <Button onClick={toggleColorMode} variant="link">
          <Icon marginTop={10} color={"blue"} as={ImSun} />
        </Button>
      </Box>
    </Flex>
  );
}

export { Navbar };
