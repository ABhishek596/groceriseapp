import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../Constants/navigationStrings';
// import {
//   OnbordingsScreen,
//   Notification,
//   Explore,
//   Home,
//   Profile,
// } from '../../src/index';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationStrings.TAB_ROUTES}>
        {/* <Stack.Screen
          name={navigationStrings.ONBORDINGSSCREEN}
          component={OnbordingsScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name={navigationStrings.TAB_ROUTES}
          component={TabRoutes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
