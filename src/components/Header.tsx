import { HStack, Box, IconButton, Button, useDisclosure, useColorMode, LightMode, useColorModeValue, Stack } from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal"; // LoginModal 컴포넌트를 가져옵니다
import SignUpModal from "./SignUpModal";

export default function Header() {
    const {isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen} = useDisclosure();
    const {isOpen:isSignUpOpen, onClose:onSignUpClose, onOpen:onLSignUpOpen} = useDisclosure();
    const {toggleColorMode} = useColorMode();
    const logoColor = useColorModeValue("blue.500", "blue.100"); // light mode에서는 "blue.500", dark mode에서는 "blue.100"
    const Icon = useColorModeValue(FaMoon, FaSun);

    return (
        <Stack
            justifyContent={"space-between"} 
            alignItems="center"
            py={5} px={40} 
            direction={{sm:"column", md:"row",}}  // 반응형: 화면 크기마다 크기를 일일이 지정할 필요 X
            spacing={{sm:3, md:0,}}
            borderBottomWidth={1}>
            {/* 아이콘 */}
            <Box color={logoColor}>
                <FaAirbnb size={48} />
            </Box>

            {/* 버튼들 */}
            <HStack spacing={2}>
                <IconButton 
                    onClick={toggleColorMode} 
                    variant="ghost" 
                    aria-label="Toggle dark mode" 
                    icon={<Icon/>} />  {/* light mode이면 달 버튼, 아니면 태양 버튼. !!!!대문자!!!! */}
                <Button onClick={onLoginOpen}>Log in</Button>

                <LightMode> {/* Sign up 버튼은 항상 light mode가 되도록 강제 */}
                    <Button onClick={onLSignUpOpen} backgroundColor="skyblue" color="white">Sign up</Button>
                </LightMode>  
              
            </HStack>

            {/* 로그인 모달 */}
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />

            {/* sign up 모달 */}
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />

        </Stack>
    );
}




