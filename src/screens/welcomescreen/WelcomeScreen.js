import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import {SubmitBtn} from '../../components/file';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

// import colors from './src/components/colors';
const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require('../../../assets/images/loga.jpg')}
        style={styles.imageBackground}
        resizeMode="cover">
        <View
          style={{marginTop: hp('35'), width: wp('90'), alignSelf: 'center'}}>
          <SubmitBtn
            label={'Login'}
            style={{backgroundColor: '#FFBD4C'}}
            onPress={() => {
              navigation.navigate('AuthStackNavigator');
            }}
          />
        </View>
        <View
          style={{marginTop: hp('3'), width: wp('90'), alignSelf: 'center'}}>
          <SubmitBtn
            label={'Create an Account'}
            style={{backgroundColor: '#7DB027'}}
            onPress={() =>
              navigation.navigate('AuthStackNavigator', {
                screen: 'SignUpScreen',
              })
            }
          />
        </View>
        <View
          style={{
            top: hp('42'),
            width: wp('40'),
            alignSelf: 'center',
            borderBottomWidth: 4,
            borderBottomColor: '#000000' + 50,
          }}
        />
      </ImageBackground> */}
      <View
        // colors={['#f8fff2', '#eaffe1','#e8fadf', '#f7fbdb']}
        style={styles.linearGradient}>
          <Image
           source={require('../../../assets/images/pgg.png')}
            style={{width:wp('100'), height:hp('30'),alignSelf:'center',marginTop:hp('4')}}
            resizeMode='cover'
          />
        <View
          style={{marginTop: hp('2'), width: wp('90'), alignSelf: 'center'}}>
          <SubmitBtn
            label={'Login'}
            style={{backgroundColor: '#FFBD4C'}}
            onPress={() => {
              navigation.navigate('AuthStackNavigator');
            }}
          />
        </View>
        <View
          style={{marginTop: hp('3'), width: wp('90'), alignSelf: 'center'}}>
          <SubmitBtn
            label={'Create an Account'}
            style={{backgroundColor: '#7DB027'}}
            onPress={() =>
              navigation.navigate('AuthStackNavigator', {
                screen: 'SignUpScreen',
              })
            }
          />
        </View>
        <View
          style={{
            top: hp('42'),
            width: wp('40'),
            alignSelf: 'center',
            borderBottomWidth: 4,
            borderBottomColor: '#000000' + 50,
          }}
        />
      </View>
    </View>
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
  linearGradient: {
    flex: 1,
  },
});
export default WelcomeScreen;
