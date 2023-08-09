import React from 'react';
import { TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { useTheme, Box } from 'native-base';

type Proprs = {
    children: React.ReactNode;

}

export const GradientSquareButton: React.FC<Proprs> = ({children}: Proprs) => {

    const {colors} = useTheme()

  return (
    <Box shadow='5'>
        <TouchableOpacity>
        <LinearGradient 
        colors={[
            colors.ocean[100],
            colors.purple[100],
        ]}
        style={{
            width:44,
            height:44,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        }}
        >
        {children}
        </LinearGradient>
    </TouchableOpacity>
    </Box>
  );
}
