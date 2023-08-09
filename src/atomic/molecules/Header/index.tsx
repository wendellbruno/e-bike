import { Box, Icon, Text } from 'native-base';
import {AntDesign} from '@expo/vector-icons'
import React from 'react';
import { GradientSquareButton } from '../../atoms';

type Proprs = {
    title: string;
}

export const Header: React.FC<Proprs> = ({title}: Proprs) => {
  return (
  <Box h="100px" alignItems='center' mt='36' flexDirection='row' justifyContent='space-between'>
    <Text fontSize='lg' fontWeight='bold' color='white'>{title}</Text>
    <GradientSquareButton isGradien>
        <Icon as={AntDesign} name="search1" color='white' />
    </GradientSquareButton>
  </Box>
  );
}
