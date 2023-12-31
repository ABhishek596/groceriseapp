import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from '../src/navigators/RootNavigator';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
