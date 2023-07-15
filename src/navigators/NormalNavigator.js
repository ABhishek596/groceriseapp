import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';
// import LoginScreen from '../screens/authscreen/login/LoginScreen';
import Details from '../screens/details/Details';
import History from '../screens/history/History';
import FieldActivity from '../screens/fieldactivity/FieldActivity';
import FieldActivitytwo from '../screens/fieldactivity/FieldActivitytwo';
import DetailsSuccess from '../screens/detailsofsuccess/DetailsSuccess';
import DrawerScreen from '../screens/drawerscreen/DrawerScreen';
import {StyleSheet} from 'react-native';
const Normal = createNativeStackNavigator();

const NormalNavigator = () => {
  return (
    <Normal.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
        cardShadowEnabled: false,
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="History">
      <Normal.Screen
        options={{headerShown: false}}
        name="History"
        component={History}
      />
      <Normal.Screen
        options={{headerShown: false}}
        name="Details"
        component={Details}
      />
      {/* <Normal.Screen
        options={{headerShown: false}}
        name="FieldActivity"
        component={FieldActivity}
      /> */}
      <Normal.Screen
        options={{headerShown: false}}
        name="DetailsSuccess"
        component={DetailsSuccess}
      />
      {/* <Normal.Screen
        options={{headerShown: false}}
        name="FieldActivitytwo"
        component={FieldActivitytwo}
      /> */}
      <Normal.Screen
        options={{headerShown: false}}
        name="DrawerScreen"
        component={DrawerScreen}
      />
    </Normal.Navigator>
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

export default NormalNavigator;
