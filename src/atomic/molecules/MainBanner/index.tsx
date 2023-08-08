import React from 'react';
import { ImageBackground, View } from 'react-native';
import {Box, Image} from 'native-base';

import slide from '../../../img/slider.png';
import bike from '../../../img/bike.png';
// import { Container } from './styles';

export const MainBanner: React.FC = () => {
  return <Box width='100%' height='300' mt='60px'>
    <ImageBackground source={slide} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} resizeMode='contain' >
        <Image source={bike} alt='img bike' />
    </ImageBackground>
  </Box>;
}
