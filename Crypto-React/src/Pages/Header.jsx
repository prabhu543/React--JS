import React from 'react' ;
import { HiMiniBars3CenterLeft,HiBars3 } from "react-icons/hi2";
import { Box, Heading , HStack, Icon, Menu } from "@chakra-ui/react" ;
import { Button } from "@chakra-ui/react"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"

const Header = ({ title , onOpen }) => {
  return (
    <Box boxShadow="sm" px={4}>
      <HStack maxW="70rem" h="16" justifyContent="space-between" px="30" mx="auto" >
      <Icon as={HiBars3} onClick={onOpen} display={{ base: "block", lg: "none" }} />

        <Heading as="h1" fontSize="28px">{ title }</Heading>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm" bg="#fff" color="#000"> <Icon as={HiMiniBars3CenterLeft}></Icon> </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuContent>
        </MenuRoot>
      </HStack>
    </Box>
  )
}

export default Header
