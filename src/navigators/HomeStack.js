import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home/Home';
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
      {/* <Stack.Screen
        name={navigationStrings.DELIVERYASSIGNED}
        component={Deliveryassigned}
      /> */}
      {/* <Stack.Screen
        name={navigationStrings.COMPLETEDELIVERY}
        component={CompleteDelivery}
      />
      <Stack.Screen name={navigationStrings.MAP} component={Map} />
      <Stack.Screen
        name={navigationStrings.UPDATEORDER}
        component={Updateorder}
      />
      <Stack.Screen
        name={navigationStrings.DELIVERYONPROCESS}
        component={DeliveryonProcess}
      />
      <Stack.Screen name={navigationStrings.DETAILS} component={Details} />
      <Stack.Screen
        name={navigationStrings.CANCELDELIVERY}
        component={CancelDelivery}
      /> */}
    </Stack.Navigator>
  );
}
