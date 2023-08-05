import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import {SubmitBtn} from '../../components/file';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import colors from './src/components/colors';
const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.linearGradient}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#000000',
              fontSize: wp('12'),
              // top: hp('5'),
              fontFamily: 'Poppins-MediumItalic',
              marginTop: hp('13'),
              // marginRight: wp('3'),
            }}>
            SafestWay
          </Text>
          <View
            style={{marginTop: hp('15'), width: wp('90'), alignSelf: 'center'}}>
            <SubmitBtn
              label={'Login'}
              style={{backgroundColor: '#222222'}}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            />
          </View>
          <View
            style={{marginTop: hp('3'), width: wp('90'), alignSelf: 'center'}}>
            <SubmitBtn
              label={'Create an Account'}
              style={{backgroundColor: '#222222'}}
              onPress={() =>
                navigation.navigate('AuthStackNavigator', {
                  screen: 'SignUpScreen',
                })
              }
            />
          </View>
        </View>
        <View
          style={{
            // top: hp('42'),
            width: wp('40'),
            alignSelf: 'center',
            borderBottomWidth: 4,
            borderBottomColor: '#000000' + 50,
            position: 'absolute',
            bottom: hp('2'),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  //li
});
export default WelcomeScreen;
