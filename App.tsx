import { NativeBaseProvider, Box } from "native-base";
import React from "react";
import { theme } from "./src/styles/theme";
import {Home} from './src/screens';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex="1" bg={theme.colors.primary[100]}>
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}
