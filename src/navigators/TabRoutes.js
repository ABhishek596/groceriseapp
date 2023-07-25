/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import Icons from '../components/icons/Icons';
import colors from '../components/colors';
import {View, StyleSheet} from 'react-native';
import HomeStack from './HomeStack';
// import RequestStack from './RequestStack';
import ProfileStack from './ProfileStack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CategoryStack from './CategoryStack';
import FavouriteStack from './FavouriteStack';
import NotificationStack from './NotificationStack';

const BototmTab = createBottomTabNavigator();

export default function TabRoutes({props, navigation}) {
  // const handleTabPress = defaultHandler => {
  //   // do something when the tab is pressed
  //   defaultHandler();
  // };
  return (
    <BototmTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar
            {...tabsProps}
            // listeners={{
            //   tabPress: handleTabPress,
            // }}
          />
        </>
      )}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.themePrimary,
        tabBarStyle: {
          position: 'absolute',
          bottom: hp('1'),
          left: wp('2'),
          right: wp('2'),
          borderTopLeftRadius: wp('8'),
          borderTopRightRadius: wp('8'),
          borderBottomLeftRadius: wp('8'),
          borderBottomRightRadius: wp('8'),
          backgroundColor: '#F5F5F5',
          height: hp('10%'),
          alignItems: 'center',
        },
      }}
      initialRouteName={navigationStrings.HOME}
      ScreenOption={{
        showLabel: false,
      }}>
      <BototmTab.Screen
        name={navigationStrings.CATEGORYSTACK}
        component={CategoryStack}
        // listeners={({navigation}) => ({
        //   tabPress: e => {
        //     // console.log('nitin',e)
        //     // Prevent default action
        //     // e.preventDefault();

        //     // Do something with the `navigation` object
        //     navigation.navigate(Home);
        //   },
        // })}
        options={{
          tabBarActiveTintColor: 'red',

          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <View style={styles.button}>
                    <Icons
                      // onPress={()=>navigation('ff')}
                      name={'category'}
                      iconType={'MaterialIcons'}
                      size={25}
                      color={'#ffffff'}
                    />
                  </View>
                ) : (
                  <Icons
                    //  onPress={()=>alert('ff')}
                    name={'category'}
                    iconType={'MaterialIcons'}
                    size={25}
                    color={colors.black}
                  />
                )}
              </>
            );
          },
        }}
      />
      <BototmTab.Screen
        name={navigationStrings.FAVOURITE}
        component={FavouriteStack}
        // listeners={({navigation}) => ({
        //   tabPress: e => {
        //     // Prevent default action
        //     // e.preventDefault();

        //     // Do something with the `navigation` object
        //     navigation.navigate(Map);
        //   },
        // })}
        options={{
          tabBarActiveTintColor: '#009A00',
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <View style={styles.button}>
                    <Icons
                      name={'favorite-border'}
                      iconType={'MaterialIcons'}
                      size={26}
                      color={'#ffffff'}
                    />
                  </View>
                ) : (
                  <Icons
                    name={'favorite-border'}
                    iconType={'MaterialIcons'}
                    size={26}
                    color={colors.black}
                  />
                )}
              </>
            );
          },
        }}
      />
      <BototmTab.Screen
        name={navigationStrings.HOMESTACK}
        component={HomeStack}
        // listeners={({navigation}) => ({
        //   tabPress: e => {
        //     // Prevent default action
        //     // e.preventDefault();

        //     // Do something with the `navigation` object
        //     navigation.navigate(History);
        //   },
        // })}
        options={{
          tabBarActiveTintColor: '#009A00',
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <View style={styles.button}>
                    <Icons
                      name={'home'}
                      iconType={'Feather'}
                      size={24}
                      color={'#ffffff'}
                    />
                  </View>
                ) : (
                  <Icons
                    name={'home'}
                    iconType={'Feather'}
                    size={24}
                    color={colors.black}
                  />
                )}
              </>
            );
          },
        }}
      />
      <BototmTab.Screen
        name={navigationStrings.NOTIFICATIONSTACK}
        component={NotificationStack}
        // listeners={({navigation}) => ({
        //   tabPress: e => {
        //     // Prevent default action
        //     // e.preventDefault();

        //     // Do something with the `navigation` object
        //     navigation.navigate(Profile);
        //   },
        // })}
        options={{
          tabBarActiveTintColor: '#009A00',
          tabBarLabel: '',
          //  tabBarIconStyle:{width:wp('1')},
          //  tabBarActiveBackgroundColor:'red',
          //  tabBarItemStyle:{flex:1,width:wp('10'),height:hp('3')},
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <View style={styles.button}>
                    <Icons
                      name={'notifications-outline'}
                      iconType={'Ionicons'}
                      size={24}
                      color={'#ffffff'}
                      style={{}}
                    />
                  </View>
                ) : (
                  <Icons
                    name={'notifications-outline'}
                    iconType={'Ionicons'}
                    size={24}
                    color={colors.black}
                  />
                )}
              </>
            );
          },
        }}
      />
      <BototmTab.Screen
        name={navigationStrings.PROFILESTACK}
        component={ProfileStack}
        // listeners={({navigation}) => ({
        //   tabPress: e => {
        //     // Prevent default action
        //     // e.preventDefault();

        //     // Do something with the `navigation` object
        //     navigation.navigate(Profile);
        //   },
        // })}
        options={{
          tabBarActiveTintColor: '#009A00',
          tabBarLabel: '',
          //  tabBarIconStyle:{width:wp('1')},
          //  tabBarActiveBackgroundColor:'red',
          //  tabBarItemStyle:{flex:1,width:wp('10'),height:hp('3')},
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <View style={styles.button}>
                    <Icons
                      name={'user'}
                      iconType={'Feather'}
                      size={24}
                      color={'#ffffff'}
                      style={{}}
                    />
                  </View>
                ) : (
                  <Icons
                    name={'user'}
                    iconType={'Feather'}
                    size={24}
                    color={colors.black}
                  />
                )}
              </>
            );
          },
        }}
      />
    </BototmTab.Navigator>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.black,
  },
});
