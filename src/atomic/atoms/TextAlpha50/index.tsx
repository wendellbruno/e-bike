import React from 'react';
import { Text } from 'native-base';

type Proprs ={
    text: string;
    type: string;
}

export function TextAlpha50({text, type}: Proprs){
  return (
    <Text fontSize={type} bold color='white:alpha.50'>{text}</Text>
  )
}
