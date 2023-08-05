import React, {useEffect} from 'react';
import {LogBox, BackHandler, Alert} from 'react-native';
import AppContainer from './src/AppContainer';
// import SplashScreen from 'react-native-splash-screen';
// import messaging from '@react-native-firebase/messaging';
import {Provider} from 'react-redux';
import store from './src/redux/store/Store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const MainNavigator = AppContainer;

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
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
  //     console.log('remoteMessage', remoteMessage);
  //   });

  //   return unsubscribe;
  // }, []);

  // <>
  //   <MainNavigator />
  // </>

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
};

//make this component available to the app
export default App;
