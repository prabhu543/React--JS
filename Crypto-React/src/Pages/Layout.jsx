import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";

const Layout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <SideBar /> 

      <Box flexGrow={1}>
        <Header title={title} onOpen={onOpen} />
        <Container maxW="70rem">{children}</Container>
      </Box>
    </Flex>
  );
};

export default Layout;
