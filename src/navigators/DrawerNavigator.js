import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/homescreen/HomeScreen';
import NotificationsScreen from '../screens/Notification/NotificationsScreen';
import DrawerScreen from '../screens/drawerscreen/DrawerScreen';
import FieldActivity from '../screens/fieldactivity/FieldActivity';
import FieldActivitytwo from '../screens/fieldactivity/FieldActivitytwo';

 const Drawer = createDrawerNavigator();

 const DrawerNavigator = () => {
   return (
       <Drawer.Navigator initialRouteName="FieldActivity"
       drawerContent={props => <DrawerScreen {...props} />}
       screenOptions={{
         headerShown: true,
         drawerActiveBackgroundColor: '#aa18ea',
         drawerActiveTintColor: '#fff',
         drawerInactiveTintColor: '#333',
         drawerLabelStyle: {
           fontFamily: 'Poppins-Regular',
           fontSize: 15,
         },
       }}
       >
         <Drawer.Screen name="Daily Field Activity Summary" component={FieldActivity} />
         <Drawer.Screen name="Daily Field Activities Summary" component={FieldActivitytwo} />
       </Drawer.Navigator>
   );
 }

 export default DrawerNavigator;