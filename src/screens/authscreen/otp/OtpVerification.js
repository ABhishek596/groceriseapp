import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SimpleHeader} from '../../../components/file';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpVerification = ({navigation}) => {
  // const otpInputRef = useRef(null);

  // useEffect(() => {
  //   otpInputRef.current.focusField(0); // Focus on the first OTP input field when component mounts
  // }, []);
  return (
    <View style={styles.container}>
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
    marginTop: hp('4'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-Regular',
  },
  toptxt3: {
    color: '#FFBD4C',
    fontSize: wp('4'),
    marginTop: hp('1'),
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
    width: 30,
    height: 45,
    borderWidth: 0,
    // borderBottomWidth: 1,
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
  },

  underlineStyleHighLighted: {
    // borderColor: '#000000',
    backgroundColor: '#FFBD4C',
    width: 40,
    height: 45,
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
