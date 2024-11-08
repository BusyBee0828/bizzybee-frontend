import { VStack, Heading, Text, Button, Link } from "@chakra-ui/react";

export default function NotFound() {
    return (
    <VStack bg="gray.100" justifyContent={"center"} minHeight={"100vh"}>
        <Heading>Page Not Found</Heading>
        <Text>Are you lost?</Text>
        <Link href="/">
            <Button colorScheme={"blue"} variant={"link"}>&larr; Go Home</Button>
        </Link>
    </VStack>
    );
}



