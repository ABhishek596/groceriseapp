import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Category} from '../../src/index';
import Produts from '../screens/Products/Produts';

const Stack = createNativeStackNavigator();

export default function CategoryStack() {
  return (
    <Stack.Navigator
      // initialRouteName={""popopo""}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'popopo'} component={Category} />
      <Stack.Screen name={"Produts"} component={Produts} />
    </Stack.Navigator>
  );
}
