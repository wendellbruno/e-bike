import React from 'react';
import { TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { useTheme, Box, Center } from 'native-base';

type Proprs = {
    children: React.ReactNode;
    isGradien?: boolean;

}

export const GradientSquareButton: React.FC<Proprs> = ({isGradien = false,children}: Proprs) => {

    const {colors} = useTheme()

  return (
      <TouchableOpacity>
            <Center shadow='5' w={44} borderRadius={10} h={44} bg={'primary.50:alpha.9'}>

        {isGradien ?
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
                borderRadius: 10,
                padding: 12
            }}
            >
            {children}
            </LinearGradient>
        : children
    }
    </Center>
    </TouchableOpacity>
  );
}
