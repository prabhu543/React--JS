import { Box, HStack, Stack , Icon , Text, Heading} from '@chakra-ui/react'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const SideBar = () => {

  const navLinks = [
    {
      icon : RxDashboard , 
      text : "Dashboard",
      link : "./",
    },
    {
      icon : BsGraphUpArrow , 
      text : "Transactions",
      link : "./Transaction",
    }
  ]

  return (
      <Stack boxShadow="sm" maxW="16rem" bg="#fff" h="100vh" justifyContent="space-between" w="256px" 
      display={{
        base : "none",
        lg: "flex"
      }}
      >  {/* display :flex; felx direction : column; */}
        <Box>
          <Heading as="h1" textAlign="center" fontSize="20px" p="3.5rem 0 1.5rem 0" color="#5F00D9" >@DOSOMECODING</Heading>
          <Box  display="grid" gap="10px"  mx="3" mb="6">
            {navLinks.map(nav => {
              return (
              <HStack key={nav.link} mx="3" bg="#e9e9f1"  gap="15px" px="4" py="3" borderRadius="5px"
              _hover={{
                bg: "#6b21fa" ,  color : "#fff"
              }}>  { /**display : flex ; align-items :center*/}
              <Icon as={nav.icon}/>
              <Text fontSize="15px" fontWeight="500">{nav.text}</Text>
              </HStack>)
            })}
          </Box>
        </Box>

        <Box  display="grid" gap="10px" mt="6" mx="3" mb="10">
          <HStack  mx="3" bg="#F3F3F7"  gap="15px" px="4" py="3" borderRadius="5px"
            _hover={{
              bg: "#6b21fa" ,  color : "#fff"
            }}>  { /**display : flex ; align-items :center*/}
            <Icon as={BiSupport}/>
            <Text fontSize="15px" fontWeight="500">{"Support"}</Text>
          </HStack>
        </Box>
      </Stack>
  )
}

export default SideBar;