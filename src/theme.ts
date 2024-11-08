import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode:"light",
    useSystemColorMode:false,   // 버튼을 클릭해서 다크모드로 전환
};

const theme = extendTheme({ config });

export default theme;



