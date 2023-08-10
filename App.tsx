import { NativeBaseProvider, Box } from "native-base";
import { theme } from "./src/styles/theme";
import React from "react";
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {Routes} from './src/Routes';



const navigationTheme = DefaultTheme;
navigationTheme.colors.background = theme.colors.primary[100]

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex="1" bg={theme.colors.primary[100]}>
        <NavigationContainer theme={navigationTheme}>
            <Routes />
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}
