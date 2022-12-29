import { Flex, Box, VStack, Icon, Text, Avatar } from "@chakra-ui/react";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { MdArchive, MdLabel } from "react-icons/md";

import { CgProfile } from "react-icons/cg";

function Sidebar() {
  const getActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#F6E05E" : "none",
    color: isActive ? "black" : "none",
  });

  return (
    <VStack height="50vh" spacing={65} width={"20%"}>
      <Flex flexDirection={"column"} justifyContent="space-between">
        <Box
          as={NavLink}
          to="/home"
          padding="10px"
          width="15rem"
          borderRadius={4}
          marginBottom={3}
          style={getActiveStyle}
        >
          <Flex alignItems="center" justifyContent={"flex-start"}>
            {" "}
            <Icon marginRight="15px" as={AiFillHome} />{" "}
            <Text as="strong">Home</Text>{" "}
          </Flex>
        </Box>

        <Box
          as={NavLink}
          to="/labels"
          padding="10px"
          width="15rem"
          borderRadius={4}
          marginBottom={3}
          style={getActiveStyle}
        >
          <Flex alignItems="center">
            {" "}
            <Icon marginRight="15px" as={MdLabel} />{" "}
            <Text as="strong">Labels</Text>{" "}
          </Flex>
        </Box>

        <Box
          as={NavLink}
          to="/archive"
          padding="10px"
          width="15rem"
          borderRadius={4}
          marginBottom={3}
          style={getActiveStyle}
        >
          <Flex alignItems="center">
            {" "}
            <Icon marginRight="15px" as={MdArchive} />{" "}
            <Text as="strong">Archive</Text>{" "}
          </Flex>
        </Box>
      </Flex>

      <Box
        padding="10px"
        width="78%"
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Box as={Link} display={"flex"} alignItems="center">
          <Avatar
            marginRight={"10px"}
            // name={`${user?.firstname} ${user?.lastname}`}
            src=""
          />{" "}
          <Text as={"strong"}>{/* {user?.firstname} {user?.lastname} */}</Text>
        </Box>
        <Box as={Link} to="/">
          <Icon color={"red"} as={IoLogOut} />
        </Box>
      </Box>
    </VStack>
  );
}

export { Sidebar };
