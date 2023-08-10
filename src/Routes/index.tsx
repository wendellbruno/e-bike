import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screens'

const Stack = createStackNavigator();

export function Routes(){
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
}
