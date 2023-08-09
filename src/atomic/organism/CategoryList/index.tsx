import { Box, HStack, Image, Text } from 'native-base';
import React from 'react';
import { GradientSquareButton } from '../../atoms';
import bike from '../../../img/categories/subtract.png';
import road from '../../../img/categories/road.png';
import helmet from '../../../img/categories/helmet.png';
import mountain from '../../../img/categories/mountain.png';

// import { Container } from './styles';

export const CategoryList: React.FC = () => {
  return (
    <Box w='100%' mb='20px' mt='5px' alignSelf='center' justifyContent='space-between'>
        <HStack justifyContent='space-between' width='95px' ml="20px">
            <GradientSquareButton isGradien>
                <Text color={'white'}>All</Text>
            </GradientSquareButton>

            <Box ml='20px' mt='-10px'>
            <GradientSquareButton >
                <Image source={bike} alt='icon of a bike' />
            </GradientSquareButton>
            </Box>
            <Box ml='20px' mt='-20px'>
            <GradientSquareButton >
                <Image source={road} alt='icon of a bike' />
            </GradientSquareButton>
            </Box>
            <Box ml='20px' mt='-30px'>
            <GradientSquareButton >
                <Image source={helmet} alt='icon of a bike' />
            </GradientSquareButton>
            </Box>
            <Box ml='20px' mt='-40px'>
            <GradientSquareButton >
                <Image source={mountain} alt='icon of a bike' />
            </GradientSquareButton>
            </Box>

        </HStack>
    </Box>
  )
}
