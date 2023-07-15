import React from 'react';
import AppContainer from './src/AppContainer';
// import SplashScreen from 'react-native-splash-screen';

const MainNavigator = AppContainer;
const App = () => {

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
      <>
      <MainNavigator /> 
      </>
  );
};


//make this component available to the app
export default App;

