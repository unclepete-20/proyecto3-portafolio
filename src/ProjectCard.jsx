/* eslint-disable prettier/prettier */
import React from "react"
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  useColorMode,
  Button,
  Flex,
  Spacer
} from "@chakra-ui/react"
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export default function ProjectCard(props) {
  // eslint-disable-next-line no-unused-vars
  const { colorMode, toggleColorMode } = useColorMode()
  const { image, colorScheme, badge, title, subtitle, url } = props

  return (
    <Box
        as={motion.div}
        whileHover={{ scale: 1.1 }} 
        transition='0.5s linear'
        w="300px"
        rounded="20px"
        overflow="hidden"
        bg={colorMode === "dark" ? "gray.700" : "gray.200"}
        boxShadow="xl"
      >
        <Image src={image} alt="Card Image" boxSize="300px" objectFit="fill" />
        <Box p={5}>
          <Stack align="center">
            <Badge variant="solid" colorScheme={colorScheme} rounded="full" px={2}>
              {badge}
            </Badge>
          </Stack>
          <Stack align="center">
            <Text as="h2" fontWeight="normal" my={2}>
              {title}
            </Text>
            <Text fontWeight="light">{subtitle}</Text>
          </Stack>
          <Flex>
            <Spacer />
            <Button
              variant="solid"
              colorScheme={colorScheme}
              size="sm"
              onClick={() => window.open(url)}
            >
              Repository
            </Button>
          </Flex>
        </Box>
      </Box>
  )
}

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    colorScheme: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }
