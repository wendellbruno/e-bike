import { Box, Image, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CardProps } from '../../../screens';
import { TextAlpha50 } from '../../atoms';


export function Card({id, price, model, image, title}: CardProps){
  return (
    <TouchableOpacity style={{padding: 5, width: '50%', height: 240, opacity: 0.9}} onPress={() => {}}>
        <Box 
        borderRadius='20px' padding='4' 
        flex='1' shadow='5' 
        bg='primary.50:alpha.9' justifyContent='center' alignItems='center'
        
        >
            <Box>
                <Image src={image} w='121px' h='80px' alt='image' resizeMode='contain' />
                <Box mt='17px' alignItems='center'>
                    <TextAlpha50 type='sm' text={title} />
                    <Text fontSize='md' bold color='white'>{model}</Text>
                    <TextAlpha50 type='sm' text={`R$ ${price}`} />
                </Box>
            </Box>
        </Box>
    </TouchableOpacity>
  )
}
