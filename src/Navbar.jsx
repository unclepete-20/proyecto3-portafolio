/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import logo from "./assets/logo_transparent.png"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} borderBottom="1px" borderColor="gray.200">
        <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box boxSize="80px">
              <Image src={logo} alt="logo" />
          </Box>
        <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <Link
                px={2}
                py={1}
                rounded="md"
                fontWeight="bold"
                fontSize="18px"
                _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href="#">
                Home
            </Link>
          </HStack>
        </HStack>
          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded="full"
                  variant="link"
                  cursor="pointer"
                  minW={0}>
                  <Avatar
                    size="sm"
                    src="https://avatars.dicebear.com/api/big-smile/variant15.svg?hair[]=shortHair&mouth[]=teethSmile&eyes[]=starstruck"
                  />
                </MenuButton>
                <MenuList alignItems="center">
                  <br />
                  <Center>
                    <Avatar
                      size="2xl"
                      src="https://avatars.dicebear.com/api/big-smile/variant15.svg?hair[]=shortHair&mouth[]=teethSmile&eyes[]=starstruck"
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Hi, Pedro!</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={() => window.open('https://github.com/unclepete-20')}>GitHub</MenuItem>
                  <MenuItem onClick={() => window.open('https://www.linkedin.com/in/pedro-pablo-arriola-jimenez-861a9a240/')}>LinkedIn</MenuItem>
                  <MenuItem onClick={() => window.open('https://twitter.com/unclepete20')}>Twitter</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
  )
}