import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex="1" bg={theme.colors.primary[100]}>

      </Box>
    </NativeBaseProvider>
  );
}
