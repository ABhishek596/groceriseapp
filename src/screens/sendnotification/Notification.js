import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import OneSignal from 'react-native-onesignal';

const Notification = () => {
  // Callback for when a notification is received while the app is in the foreground
  //   const onReceived = notification => {
  //     console.log('Notification received:', notification);
  //     // Handle the received notification here as per your requirement
  //   };

  //   // Callback for when a notification is opened by the user
  //   const onOpened = openResult => {
  //     console.log('Notification opened:', openResult);
  //     // Handle the opened notification here as per your requirement
  //   };

  useEffect(() => {
    // Replace 'YOUR_ONESIGNAL_APP_ID' with your actual OneSignal App ID
    OneSignal.setAppId('ff9e8c6b-859d-48f2-9e2a-43a876b26433');
    OneSignal.setLogLevel(6, 0);
    // OneSignal.inFocusDisplaying(2);

    // Add event listener for received notifications
    // OneSignal.addEventListener('received', onReceived);
    // // Add event listener for opened notifications
    // OneSignal.addEventListener('opened', onOpened);

    // return () => {
    //   // Remember to remove event listeners when the component unmounts
    //   OneSignal.removeEventListener('received', onReceived);
    //   OneSignal.removeEventListener('opened', onOpened);
    // };
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
        //Silence notification by calling complete() with no argument
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  }, []);

  // Handle button click for sending notification to a specific player ID
  const handlePlayerIdNotification = () => {
    // eslint-disable-next-line no-undef
    sendNotificationToPlayerId('50e335bb-f6b8-4869-94da-cf717d3374da', {
      /* Your notification payload for the specific player ID */
      headings: {en: 'Notification Title'},
      contents: {en: 'Notification to specific player ID'},
    });
  };

  // Handle button click for sending notification to all subscribers
  const handleAllSubscribersNotification = () => {
    // eslint-disable-next-line no-undef
    sendNotificationToAllSubscribers({
      /* Your notification payload for all subscribers */
      headings: {en: 'Notification Title'},
      contents: {en: 'Notification to all subscribers'},
    });
  };

  // Rest of your code...

  return (
    <View>
      <Text>OneSignal Notification Test</Text>
      <Button
        title="Send Notification to Player ID"
        onPress={handlePlayerIdNotification}
      />
      <Button
        title="Send Notification to All Subscribers"
        onPress={handleAllSubscribersNotification}
      />
    </View>
  );
};

export default Notification;
