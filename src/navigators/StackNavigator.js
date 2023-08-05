import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../screens/Profile/editprofile/EditProfile';
import {StyleSheet} from 'react-native';
import Shoppingcart from '../screens/shoppingcart/Shoppingcart';
import Search from '../screens/Searchscreen/Search';
import ProductDetail from '../screens/productdetail/ProductDetails';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
        cardShadowEnabled: false,
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="EditProfile">
      <Stack.Screen
        options={{headerShown: false}}
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Shoppingcart"
        component={Shoppingcart}
      />
       <Stack.Screen
        options={{headerShown: false}}
        name="Search"
        component={Search}
      />
         <Stack.Screen
        options={{headerShown: false}}
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0, // remove shadow on Android
  },
});

export default StackNavigator;
