import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';
import AuthStackNavigator from './AuthStackNavigator';
import ComponentsScreen from '../screens/components/ComponentsScreen';
import ProductDetails from '../screens/productdetail/ProductDetails';
import MyCart from '../screens/mycart/MyCart';
import OnboardingScreen from '../screens/onboardingscreen/OnboardingScreen';
import ComponentsScreenthree from '../screens/components/ComponentsScreenthree';
import ComponentsScreentwo from '../screens/components/ComponentsScreentwo';
import TabRoutes from './TabRoutes';
import Notification from '../screens/sendnotification/Notification';
const Root = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnboardingScreen">
      <Root.Screen name="TabRoutes" component={TabRoutes} />
      <Root.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Root.Screen name="MyCart" component={MyCart} />
      <Root.Screen name="ProductDetails" component={ProductDetails} />
      <Root.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Root.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
      <Root.Screen name="ComponentsScreen" component={ComponentsScreen} />
      <Root.Screen name="ComponentsScreentwo" component={ComponentsScreentwo} />
      <Root.Screen name="Notification" component={Notification} />

      <Root.Screen
        name="ComponentsScreenthree"
        component={ComponentsScreenthree}
      />
    </Root.Navigator>
  );
};

export default RootNavigator;
