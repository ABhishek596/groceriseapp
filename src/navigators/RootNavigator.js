import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';
import AuthStackNavigator from './AuthStackNavigator';
import ComponentsScreen from '../screens/components/ComponentsScreen';
import ProductDetails from '../screens/productdetail/ProductDetails';
import MyCart from '../screens/mycart/MyCart';
const Root = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ComponentsScreen">
      <Root.Screen name="MyCart" component={MyCart} />
      <Root.Screen name="ProductDetails" component={ProductDetails} />
      <Root.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Root.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
      <Root.Screen name="ComponentsScreen" component={ComponentsScreen} />
    </Root.Navigator>
  );
};

export default RootNavigator;
