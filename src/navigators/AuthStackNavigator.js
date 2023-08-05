import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/authscreen/login/LoginScreen';
import PhoneNumber from '../screens/authscreen/phoneverify/PhoneNumber';
import OtpVerification from '../screens/authscreen/otp/OtpVerification';
import {StyleSheet} from 'react-native';
import SignUpScreen from '../screens/authscreen/signup/SignUpScreen';
import ForgotPassword from '../screens/authscreen/forgotpassword/ForgotPassword';
import ChangePassword from '../screens/authscreen/changepassword/ChangePassword';
import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';
import OnboardingScreen from '../screens/onboardingscreen/OnboardingScreen';
const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = ({ route }) => {
  const { onSignIn } = route.params || {};
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
        cardShadowEnabled: false,
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="OnboardingScreen">
      <AuthStack.Screen
        options={{headerShown: false}}
        name="OnboardingScreen"
        component={OnboardingScreen}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
        initialParams={{ onSignIn }}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="PhoneNumber"
        component={PhoneNumber}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="OtpVerification"
        component={OtpVerification}
        initialParams={{ onSignIn }}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="ChangePassword"
        component={ChangePassword}
      />
    </AuthStack.Navigator>
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

export default AuthStackNavigator;
