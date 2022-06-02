/* eslint-disable prettier/prettier */
import React from "react"
import {
  Box,
  Flex,
  Avatar,
  Image,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Text,
} from "@chakra-ui/react"
import { motion } from 'framer-motion'
import gif from "./assets/planet.gif"
import Bio from "./Bio.jsx"
import ExperienceCard from "./ExperienceCard.jsx"
import SolidityLogo from "./assets/solidity.png"
import JavaLogo from "./assets/java.jpg"
import PythonLogo from "./assets/python.png"
import JavaScriptLogo from "./assets/JavaScript.png"

export default function LandingPage() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
         <Box h={'93vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
            <Flex h={'89.6vh'} alignItems={'center'} justifyContent={'center'}>
             <Box maxW={2000} mt={-200}>
                <Image src={gif} alt="logo" w={1200}/>
             </Box>
             <Box maxW={2000} mt={-350}>
                <Text fontSize={'90px'} fontWeight={'bold'} mt={250} ml={-10}>Welcome to Pedro's Planet</Text>
             </Box>
            </Flex>
            <Flex h={'100px'} alignItems={'center'} justifyContent={'center'}>
                <Bio />
            </Flex>
            <Flex h={'100px'} alignItems={'center'} justifyContent={'center'}>
                <Text fontSize={'90px'} fontWeight={'bold'} mt={500}>Experience</Text>
            </Flex>
            <Center>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mt={600}>
                    <HStack spacing={90} alignItems={'center'}>
                        <ExperienceCard title="Solidity" colorScheme="blackAlpha" image={SolidityLogo} badge="Blockchain" subtitle="High-level language for implementing smart contracts." url="https://docs.soliditylang.org/en/v0.8.14/"/>
                        <ExperienceCard title="Java" colorScheme="red" image={JavaLogo} badge="Backend" subtitle="Programming language software platform." url="https://www.java.com/es/"/>
                        <ExperienceCard title="Python" colorScheme="blue" image={PythonLogo} badge="Data Science" subtitle="High-level programming language with dynamic semantics." url="https://www.python.org/"/>
                        <ExperienceCard title="JavaScript" colorScheme="yellow" image={JavaScriptLogo} badge="Web" subtitle="Programming language that allows you to make web pages interactive." url="https://www.javascript.com/"/>
                    </HStack>
                </Flex>
            </Center>
            <Flex h={'2px'} alignItems={'center'} justifyContent={'center'}>
                <Box as={motion.div} whileHover={{ scale: 1.4 }} transition='0.5s linear' maxW={2000} mt={900}>
                    <Text fontSize={'15px'} fontWeight={'bold'}>© 2022 Pedro Arriola (20188)</Text>
                </Box>
            </Flex>
         </Box>
        </>
    )
}