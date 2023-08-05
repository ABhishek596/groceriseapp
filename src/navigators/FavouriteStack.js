import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Favourite} from '../../src/index';
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();

export default function FavouriteStack() {
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.FAVOURITESTACK}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={navigationStrings.FAVOURITESTACK}
        component={Favourite}
      />
    </Stack.Navigator>
  );
}
