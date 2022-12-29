import { Box, Button, Tag, Heading, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete, MdArchive } from "react-icons/md";

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box p="1">
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));

const CustomToolTip = ({ icon, text }) => (
  <Tooltip label={text}>
    <CustomCard>{icon}</CustomCard>
  </Tooltip>
);

function HabitComponent() {
  return (
    <Box
      boxShadow={"2xl"}
      bg={"yellow.500"}
      borderRadius={"20px"}
      padding={"2rem"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <Heading>Drink 3 litres of water</Heading>
      <Box
        width={"80%"}
        display={"flex"}
        marginTop={"2rem"}
        justifyContent={"space-around"}
      >
        <CustomToolTip
          text={"edit habit"}
          icon={<FaEdit fontSize={20} cursor={"pointer"} />}
        ></CustomToolTip>
        <CustomToolTip
          text={"delete habit"}
          icon={<MdOutlineDelete fontSize={20} cursor={"pointer"} />}
        ></CustomToolTip>
        <CustomToolTip
          text={"archive habit"}
          icon={<MdArchive fontSize={20} cursor={"pointer"} />}
        ></CustomToolTip>
      </Box>
    </Box>
  );
}

export { HabitComponent };
