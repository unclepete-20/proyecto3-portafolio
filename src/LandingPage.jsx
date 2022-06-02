/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Center,
  HStack,
  Text,
} from "@chakra-ui/react"
import { motion } from 'framer-motion'
import gif from "./assets/planet.gif"
import Bio from "./Bio.jsx"
import ExperienceCard from "./ExperienceCard.jsx"
import ProjectCard from "./ProjectCard.jsx"
import SolidityLogo from "./assets/solidity.png"
import JavaLogo from "./assets/java.jpg"
import PythonLogo from "./assets/python.png"
import JavaScriptLogo from "./assets/JavaScript.png"
import Amazon from "./assets/amazon.png"
import Calculator from "./assets/calculadora.png"
import AlChilazo from "./assets/logo-chile.png"
import View from "./assets/view.png"
import Sonic from "./assets/sonic.gif"

export default function LandingPage() {
    return (
        <Box h="380vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <Flex h="89.6vh" alignItems="center" justifyContent="center">
             <Box maxW={2000} mt={-200}>
                <Image src={gif} alt="logo" w={1200}/>
             </Box>
             <Box maxW={2000} mt={-350}>
                <Text fontSize="90px" fontWeight="bold" mt={250} ml={-10} textShadow="4px 2px #73777F">Welcome to Pedro's Planet</Text>
             </Box>
            </Flex>
            <Flex h="100px" alignItems="center" justifyContent="center">
                <Bio />
            </Flex>
            <Flex h="100px" alignItems="center" justifyContent="center">
                <Text fontSize="85px" fontWeight="bold" mt={500} textShadow="4px 2px #73777F">Experience</Text>
            </Flex>
            <Center>
                <Flex h={16} alignItems="center" justifyContent="space-between" mt={600}>
                    <HStack spacing={90} alignItems="center">
                        <ExperienceCard title="Solidity" colorScheme="blackAlpha" image={SolidityLogo} badge="Blockchain" subtitle="High-level language for implementing smart contracts." url="https://docs.soliditylang.org/en/v0.8.14/"/>
                        <ExperienceCard title="Java" colorScheme="red" image={JavaLogo} badge="Backend" subtitle="Programming language software platform." url="https://www.java.com/es/"/>
                        <ExperienceCard title="Python" colorScheme="blue" image={PythonLogo} badge="Data Science" subtitle="High-level programming language with dynamic semantics." url="https://www.python.org/"/>
                        <ExperienceCard title="JavaScript" colorScheme="yellow" image={JavaScriptLogo} badge="Web" subtitle="Programming language that allows you to make web pages interactive." url="https://www.javascript.com/"/>
                    </HStack>
                </Flex>
            </Center>
            <Flex h="100px" alignItems="center" justifyContent="center">
                <Text fontSize="85px" fontWeight="bold" mt={600} textShadow="4px 2px #73777F">Projects I have worked on :)</Text>
            </Flex>
            <Center>
                <Flex h={16} alignItems="center" justifyContent="space-between" mt={600}>
                    <HStack spacing={90} alignItems="center">
                        <ProjectCard title="Amazon clone" colorScheme="blue" image={Amazon} badge="React" subtitle="Amazon clone built with React." url="https://github.com/unclepete-20/proyecto01-amazon20188.git"/>
                        <ProjectCard title="React Calculator" colorScheme="blue" image={Calculator} badge="React" subtitle="Calculator built with React" url="https://github.com/unclepete-20/lab10.1-testing.git"/>
                        <ProjectCard title="Al Chilazo" colorScheme="blue" image={AlChilazo} badge="Flutter Development" subtitle="Service app built with Flutter" url="https://github.com/Racso1624/AlChilazo.git"/>
                        <ProjectCard title="View" colorScheme="blue" image={View} badge="Database Management" subtitle="Movie platform built with React and PostgreSQL" url="https://github.com/SantiagoTaracena01/View.git"/>
                    </HStack>
                </Flex>
            </Center>
            <Center>
                <Flex as={motion.div} whileHover={{ scale: 1.05 }} transition='0.5s linear' h="2px" alignItems="center" justifyContent="center">
                    <Image src={Sonic} alt="logo" w={200} mt={700}/>
                </Flex>
            </Center>
            <Center>
                <Flex h="2px" alignItems="center" justifyContent="center">
                    <Box maxW={2000} mt={900}>
                        <Text fontSize="15px" fontWeight="bold">© 2022 Pedro Arriola (20188)</Text>
                    </Box>
                </Flex>
            </Center>
         </Box>
    )
}