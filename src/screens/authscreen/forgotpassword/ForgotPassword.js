//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SubmitBtn1,
  FormInputField,
  FormMaxInputField,
} from '../../../components/file';
import TextInputLabel from '../../../components/textInputLabel';
import Icons from '../../../components/icons/Icons';
import {SimpleHeader} from '../../../components/file';

// create a component
const ForgotPassword = ({navigation}) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState('');
  const validateEmail = email => {
    // Regular expression to validate email format

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        // colors={['#f8fff2', '#eaffe1','#e8fadf', '#f7fbdb']}
        style={styles.linearGradient}>
        <SimpleHeader
          size={18}
          name={'Forgot Password'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.toptxt2}>
          Please enter your email address.You will receive a{'\n'}link to create
          a new password via email.
        </Text>

        <TextInputLabel
          // label="rrrr"
          onBlur={() => {
            // handleBlur('email');
            validateEmail(email);
          }}
          onChangeText={txt => setEmail(txt)}
          iconType={'AntDesign'}
          name={'checkcircleo'}
          iconColor={isEmailValid ? 'green' : 'grey'}
          namew={'email'}
          placeHolder="Email"
          inputStyle={{marginTop: hp('5')}}
        />

        <View
          style={{
            marginTop: hp('4'),
          }}>
          <SubmitBtn1
            style={{
              width: wp('90'),
              height: hp('8'),
              backgroundColor: '#222222',
              borderColor: '#222222',
              borderRadius: 5,
              marginTop: hp('0'),
            }}
            txtStyle={{color: '#fff', fontWeight: 'bold'}}
            label="Next"
            onPress={() => {
              // if (isEmailValid === true) {
                navigation.navigate('ChangePassword');
              // }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    flex: 1,
    width: wp('100'),
    height: hp('100'),
  },
  bottomline: {
    flexDirection: 'row',
    width: wp('90'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('40'),
  },
  signinicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignContent:'center'
  },
  signin: {
    color: '#000000',
    fontSize: wp('3.2'),
  },
  account: {
    alignContent: 'center',
  },
  toptxt: {
    color: '#000000',
    fontSize: wp('5'),
    marginTop: hp('2'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-SemiBold',
  },
  toptxt2: {
    color: 'grey',
    fontSize: wp('3.5'),
    marginTop: hp('4'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-Regular',
  },
});

//make this component available to the app
export default ForgotPassword;
