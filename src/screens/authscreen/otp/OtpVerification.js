import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SimpleHeader} from '../../../components/file';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  SubmitBtn1,
  FormInputField,
  FormMaxInputField,
} from '../../../components/file';
import colors from '../../../components/colors';

const OtpVerification = ({route, navigation}) => {
  // const otpInputRef = useRef(null);
  const {onSignIn} = route.params || {};

  console.log('onSignIn', onSignIn);
  
  const handleSignIn = () => {
    // After successful sign-in, call onSignIn function to update isAuthenticated state in RootNavigator
    onSignIn && onSignIn();
  };

  // const [message, setMessage] = useState('');
  // console.log('Code is', message);
  // useEffect(() => {
  //   otpInputRef.current.focusField(0); // Focus on the first OTP input field when component mounts
  // }, []);

  // onPress={() => {
  //   navigation.navigate('PhoneNumber');
  //   // navigation.navigate('TabRoutes', {screen: 'HomeStack'});
  // }}

  // useEffect(() => {
  //   // After 3 seconds, set the message state to a new value
  //   const timeoutId = setTimeout(() => {
  //     // setMessage('Delayed message after 3 seconds!');

  //     // if (message !== '') {
  //       // navigation.navigate('PhoneNumber');
  //       navigation.navigate('TabRoutes', {screen: 'HomeStack'});
  //     // }
  //   }, 4000);

  //   // Clean up the timer when the component is unmounted or the dependency array changes
  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View
          // colors={['#f8fff2', '#eaffe1', '#e8fadf', '#f7fbdb']}
          style={styles.linearGradient}>
          <SimpleHeader
            size={18}
            name={'Phone Verification'}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.toptxt}>Enter your OTP code here</Text>
          <View style={styles.otpinputView}>
            <OTPInputView
              // ref={otpInputRef}
              style={{width: wp('80'), height: hp('10')}}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
                // setMessage(code);
              }}
              // placeholderTextColor={{color:'blue'}}
              // codeInputFieldStyle={styles.codeInputFieldStyle}
            />
          </View>
          <Text style={styles.toptxt2}>Didn't you received any code?</Text>
          <TouchableOpacity>
            <Text
              style={styles.toptxt3}
              onPress={() => navigation.navigate('LoginScreen')}>
              Resend a new code.
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{position: 'absolute', bottom: hp('2'), alignSelf: 'center'}}>
          <SubmitBtn1
            // label={'Sign In'}
            // disabled={!isValid}
            // onPress={handleSubmit}
            // style={{marginTop: hp('10')}}
            style={{
              width: wp('90'),
              height: hp('8'),
              backgroundColor: '#222222',
              borderColor: '#222222',
              borderRadius: 5,
              // marginTop: hp('3'),
            }}
            txtStyle={{color: '#fff', fontWeight: 'bold'}}
            label="Verify Otp"
            // onPress={() => {
            //   if (values.password !== '' && !errors.password) {
            //     navigation.navigate('TabRoutes');
            //   }
            // }}
            // onPress={() => {
            //   navigation.navigate('TabRoutes', {screen: 'HomeStack'});
            //   // navigation.navigate('TabRoutes', {
            //   //   screen: 'HomeStack',
            //   //   params: { user: 'jane' },
            //   // });
            //   // navigation.navigate('HomeStack');
            // }}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toptxt: {
    color: '#000000',
    fontSize: wp('4'),
    marginTop: hp('4'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-Regular',
  },
  toptxt2: {
    color: '#000000',
    fontSize: wp('4'),
    marginTop: hp('6'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-Regular',
  },
  toptxt3: {
    color: colors.gray + 70,
    fontSize: wp('4'),
    marginTop: hp('3'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-Regular',
  },

  //OTPINPUT
  borderStyleBase: {
    width: 30,
    height: 45,
    // alignSelf: 'center',
    color: '#000000',
  },

  borderStyleHighLighted: {
    borderColor: '#000000',
  },

  underlineStyleBase: {
    width: 60,
    height: 60,
    borderWidth: 0,
    // borderBottomWidth: 1,
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
  },

  underlineStyleHighLighted: {
    // borderColor: '#000000',
    // backgroundColor: '#FFBD4C',
    borderWidth: 1,
    borderColor: colors.gray,
    width: 60,
    height: 60,
    borderRadius: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  otpinputView: {
    alignSelf: 'center',
    marginTop: hp('10'),
  },
});

export default OtpVerification;
