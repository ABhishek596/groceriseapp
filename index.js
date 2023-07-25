/**
 * @format
 */

import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import OneSignal from 'react-native-onesignal';
import App from './App';
import {name as appName} from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

messaging().getInitialNotification(async remoteMessage => {
  console.log('Message handled in the kill state!', remoteMessage);
});

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId('ff9e8c6b-859d-48f2-9e2a-43a876b26433');
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log('Prompt response:', response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(
  notificationReceivedEvent => {
    console.log(
      'OneSignal: notification will show in foreground:',
      notificationReceivedEvent,
    );
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  },
);


// // Getting the User ID
// async function getUserId() {
//   try {
//     const state = await OneSignal.getPermissionSubscriptionState();
//     const subscriptionStatus = state.subscriptionStatus;
//     const userId = subscriptionStatus.userId;
//     console.log('OneSignal User ID:', userId);
//     return userId;
//   } catch (error) {
//     console.error('Error getting OneSignal User ID:', error);
//     return null;
//   }
// }

// // Now, you can call the getUserId() function to get the User ID
// getUserId();



//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log('OneSignal: notification opened:', notification);
});

OneSignal.sendTags({"UserId":"abhishekkoushal0889@gmail.com", "Branch":0});


AppRegistry.registerComponent(appName, () => App);
