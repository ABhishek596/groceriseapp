import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthStackNavigator';
import TabRoutes from './TabRoutes';
import StackNavigator from './StackNavigator';

const Root = createNativeStackNavigator();
const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <Root.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isAuthenticated ? 'TabRoutes' : 'AuthStackNavigator'}>
      {isAuthenticated ? (
        <>
          <Root.Screen
            name="TabRoutes"
            component={TabRoutes}
            initialParams={{
              onSignOut: handleSignOut,
            }}
          />
          <Root.Screen name="StackNavigator" component={StackNavigator} />
        </>
      ) : (
        <Root.Screen
          name="AuthStackNavigator"
          component={AuthStackNavigator}
          options={{
            headerShown: false,
            headerTransparent: true,
            animation: 'fade',
          }}
          initialParams={{
            onSignIn: handleSignIn,
          }}
        />
      )}
    </Root.Navigator>
  );
};

export default RootNavigator;
