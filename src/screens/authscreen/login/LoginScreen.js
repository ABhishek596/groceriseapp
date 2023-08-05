/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SubmitBtn1,
  FormInputField,
  FormMaxInputField,
} from '../../../components/file';
import Icons from '../../../components/icons/Icons';
import {SimpleHeader} from '../../../components/file';
import {useTogglePasswordVisibility} from '../../../components/TogglePasswordVisibility/useTogglePasswordVisibility';
import {Formik} from 'formik';
import * as yup from 'yup';
// create a component
const LoginScreen = ({route, navigation}) => {
  // const { onSignIn } = route.params || {};

  // console.log('onSignIn',onSignIn);


  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  const [loginerr, setLoginerr] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = email => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),

    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  //Not
  // const handleSignIn = () => {
  //   // After successful sign-in, call onSignIn function to update isAuthenticated state in RootNavigator
  //   onSignIn && onSignIn();
  // };

  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader
        size={18}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          // colors={['#f8fff2', '#eaffe1','#e8fadf', '#f7fbdb']}
          style={styles.linearGradient}>
          <KeyboardAvoidingView style={styles.container}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#000000',
                fontSize: wp('13'),
                top: hp('5'),
                fontFamily: 'Poppins-MediumItalic',
                // marginRight: wp('3'),
              }}>
              Welcome
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                color: '#000000',
                fontSize: wp('5.5'),
                top: hp('3'),
                fontFamily: 'Poppins-MediumItalic',
                // marginRight: wp('3'),
              }}>
              to SafestWay
            </Text>
            {/* <Image
           source={require('../../../../assets/images/pgg.png')}
            style={{width:wp('100'), height:hp('30'),alignSelf:'center'}}
            resizeMode='cover'
          /> */}
            {/* <TextInputLabel
            // label="rrrr"
            iconType={'AntDesign'}
            name={'checkcircleo'}
            iconColor={'#7DB027'}
            namew={'email'}
            placeHolder="Email"
            inputStyle={{marginTop: hp('30')}}
          /> */}

            {/* <TextInputLabel
            // label="rrrr"
            iconType={'Ionicons'}
            name={rightIcon}
            iconColor={'grey'}
            namew={'lock'}
            placeHolder="Password"
            value={password}
            secureTextEntry={passwordVisibility}
            onChangeText={password => setPassword(password)}
            onPressRight={handlePasswordVisibility}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AuthStackNavigator', {
                screen: 'ForgotPassword',
              })
            }>
            <Text
              style={{
                alignSelf: 'flex-end',
                color: '#000000',
                fontSize: wp('3.5'),
                top: hp('2'),
                fontFamily: 'Poppins-Regular',
                marginRight: wp('3'),
              }}>
              Forgot Password {'  '}
            </Text>
          </TouchableOpacity> */}
            {/* <View
            style={{
              marginTop: hp('6'),
            }}>
            <SubmitBtn1
              style={{
                width: wp('90'),
                height: hp('8'),
                backgroundColor: '#222222',
                borderColor: '#222222',
                borderRadius: 5,
                marginTop: hp('3'),
              }}
              txtStyle={{color: '#fff', fontWeight: 'bold'}}
              label="Sign In"
              onPress={() => navigation.navigate('PhoneNumber')}
            />
          </View> */}

            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: ''}}
              // onSubmit={async(values) => {
              //   setEmail(values.email);
              //   setPassword(values.password);
              //   await mySubmitData();
              //   // setResp(values);
              //   // console.log('info',values);
              //   // Alert.alert('Success');
              // }}
              // eslint-disable-next-line no-undef
              onSubmit={values => handleSubmit(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                touched,
              }) => (
                <>
                  <View style={styles.textb}>
                    <TextInput
                      placeholder="Email Address"
                      style={styles.textc}
                      onChangeText={handleChange('email')}
                      // onBlur={handleBlur('email')}
                      onBlur={() => {
                        // handleBlur('email');
                        validateEmail(values.email);
                      }}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    <Icons
                      iconType={'AntDesign'}
                      name="checkcircleo"
                      size={20}
                      color={isEmailValid ? 'green' : 'grey'}
                      style={{marginRight: wp('1')}}
                    />
                  </View>
                  {/* {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )} */}

                  {isEmailValid === false ? (
                    <>
                      {errors.email && touched.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                      )}
                    </>
                  ) : null}

                  <View style={styles.textd}>
                    {/* <Icon
                    name="lock"
                    size={20}
                    color="black"
                    style={{marginLeft: 10, width: wp('5%')}}></Icon> */}
                    <TextInput
                      placeholder="Password"
                      style={styles.texte}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={passwordVisibility}
                      // secureTextEntry
                    />
                    <Pressable onPress={handlePasswordVisibility}>
                      <Icons
                        iconType={'Ionicons'}
                        name={rightIcon}
                        size={20}
                        color="black"
                        style={{marginRight: 0}}
                      />
                    </Pressable>
                  </View>
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                  {loginerr && (
                    <Text style={styles.errorlogintxt}>{loginerr}</Text>
                  )}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AuthStackNavigator', {
                        screen: 'ForgotPassword',
                      })
                    }>
                    <Text
                      style={{
                        alignSelf: 'flex-end',
                        color: '#000000',
                        fontSize: wp('3.5'),
                        top: hp('2'),
                        fontFamily: 'Poppins-Regular',
                        marginRight: wp('3'),
                      }}>
                      Forgot Password {'  '}
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      marginTop: hp('6'),
                    }}
                  />
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
                      marginTop: hp('3'),
                    }}
                    txtStyle={{color: '#fff', fontWeight: 'bold'}}
                    label="Sign In"
                    // onPress={() => {
                    //   if (values.password !== '' && !errors.password) {
                    //     navigation.navigate('TabRoutes');
                    //   }
                    // }}{handleSignIn}
                    onPress={() => {
                      // onSignIn
                      navigation.navigate('PhoneNumber');
                      // navigation.navigate('TabRoutes', {screen: 'HomeStack'});
                    }}
                    // onPress={handleSignIn}
                  />
                </>
              )}
            </Formik>
            <View style={styles.bottomline}>
              <View style={styles.account}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#000000',
                    fontSize: wp('3.2'),
                    marginTop: hp('2'),
                    fontFamily: 'Poppins-Regular',
                    bottom: hp('0.5'),
                    //paddingBottom: hp('10'),
                  }}
                  // onPress={() => navigation.navigate('Notification')}
                >
                  Have No Account?
                </Text>
              </View>
              <View style={styles.signinicon}>
                <Text
                  style={styles.signin}
                  onPress={() => navigation.navigate('SignUpScreen')}>
                  Sign Up
                </Text>
                <Icons
                  iconType={'AntDesign'}
                  name={'caretright'}
                  size={15}
                  color={'#000000'}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
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
    // position: 'absolute',
    // bottom: 50,
    marginTop: hp('6'),
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

  //logn

  responsiveBox: {
    width: wp('90%'),
    height: hp('17%'),
    marginTop: hp('4%'),
    alignSelf: 'center',
  },

  loginBtn: {
    width: wp('90%'),
    borderRadius: 25,
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('6%'),
    backgroundColor: '#4D5DFA',
  },

  texta: {
    fontWeight: '400',
    color: '#212121',
    fontStyle: 'normal',
    fontSize: hp('4.5%'),
    fontFamily: 'Gilroy-Bold',
  },

  textb: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    borderRadius: 10,
    width: wp('90%'),
    marginTop: hp('17.5'),
    bottom: 0,
  },

  textc: {
    height: 40,
    margin: 12,
    fontWeight: '400',
    color: '#212121',
    fontFamily: 'Gilroy-SemiBold',
    width: wp('75%'),
  },

  textd: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    borderRadius: 10,
    width: wp('90%'),
  },

  texte: {
    height: 40,
    margin: 12,
    fontWeight: '400',
    width: wp('75%'),
    fontFamily: 'Gilroy-Medium',
    color: '#000000',
  },

  textf: {
    color: '#212121',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Gilroy-SemiBold',
    alignSelf: 'center',
  },

  textg: {
    marginTop: hp('1%'),
    fontSize: hp('1.8%'),
    color: '#B6B6B6',
    fontFamily: 'Gilroy-SemiBold',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    textAlign: 'left',
    marginLeft: wp('7.5%'),
  },
  errorlogintxt: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center',
    top: hp('5'),
  },
});

//make this component available to the app
export default LoginScreen;
