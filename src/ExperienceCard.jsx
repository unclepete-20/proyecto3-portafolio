import React from "react"
import { Box, Image, Badge, Text, Stack, 
    useColorMode, Button, Flex, Spacer } 
    from "@chakra-ui/react"

export default function ExperienceCard(props) {
    const { colorMode, toggleColorMode} = useColorMode()

    return (
        <>
            <Box w="300px" rounded="20px" overflow="hidden" bg={ colorMode === "dark" ? "gray.700": "gray.200"} boxShadow='xl'>
            <Image src= {props.image} alt="Card Image" boxSize="300px" objectFit="fill">
            </Image>
            <Box p={5}>
                <Stack align="center">
                <Badge variant="solid" colorScheme={props.colorScheme} 
                    rounded="full" px={2}>
                    {props.badge}
                </Badge>
                </Stack>
                <Stack align="center">
                <Text as="h2" fontWeight="normal" my={2} >
                    {props.title}
                </Text>
                <Text fontWeight="light">
                    {props.subtitle}
                </Text>
                </Stack>
                <Flex>  
                <Spacer />
                <Button variant="solid" 
                    colorScheme={props.colorScheme} size="sm"
                    onClick={() => window.open(props.url)}>
                    Learn More
                </Button>
                </Flex>
            </Box>
            </Box>
        </>
      );
}