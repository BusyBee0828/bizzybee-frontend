import { Box, VStack, Image, Button, Grid, Text, HStack, useColorModeValue} from '@chakra-ui/react';
import { FaRegHeart, FaStar,} from "react-icons/fa";

export default function Room() {
    const gray = useColorModeValue("gray.600", "gray.300")
    return(
        <VStack spacing={-0.5} alignItems={"flex-start"}>
        <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
            <Image 
                minH="280"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1080984242893244338/original/632a5800-19e9-4644-9446-03eba5f82821.jpeg?im_w=720"/>
                <Button variant={"unstyled"} position="absolute" top={0} right={0} color={"white"}>
                    <FaRegHeart size="20px"/> 
                </Button>
        </Box>
        <Box>
            <Grid gap={2} templateColumns={"4fr 1fr"}> {/* 첫번째 칼럼의 크기를 2배로 */}
                <Text as="b" noOfLines={1} fontSize="md">
                    원주시, 강원도, 한국
                </Text>
                <HStack _hover={{color: "red.500",}} color={"gray"} spacing={1} alignItems={"center"}>
                    <FaStar size={12}/>
                    <Text>5.0</Text>
                </HStack>
            </Grid>
            <Text fontSize="sm" color={gray}>Seoul, S.Korea</Text>
        </Box>
        <Text fontSize="sm" color={gray}>
            <Text as="b">$72</Text> / night
        </Text>
    </VStack>
    )
}



