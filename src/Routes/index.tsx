import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screens'
import {Detail} from '../screens';

const Stack = createStackNavigator();

export function Routes(){
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  );
}
