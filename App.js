import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import AppContainer from './src/AppContainer';
// import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';

const MainNavigator = AppContainer;

const App = () => {
  // useEffect(() => {
  //   getDeviceToken();
  // }, []);
  // const getDeviceToken = async () => {
  //   let token = await messaging().getToken();
  //   console.log('tokenaaaaaaaassss', token);
  // };
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert(
  //       'A new FCM message arrived in foreground mode!',
  //       JSON.stringify(remoteMessage),
  //     );
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <>
      <MainNavigator />
    </>
  );
};

//make this component available to the app
export default App;
