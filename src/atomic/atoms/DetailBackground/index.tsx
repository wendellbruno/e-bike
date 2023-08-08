import {Image} from 'native-base'
import { View } from 'react-native';
import React from 'react';

import detail from '../../../img/detail.png';

export const DetailBackground: React.FC = () => {
  return <Image 
  source={detail}
   alt='detail of home' 
   position='absolute' 
   top='140' bottom='0' 
   right='0'
    />
}