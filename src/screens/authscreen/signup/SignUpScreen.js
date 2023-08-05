/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SubmitBtn1} from '../../../components/file';
import Icons from '../../../components/icons/Icons';
import {SimpleHeader} from '../../../components/file';
import {useTogglePasswordVisibility} from '../../../components/TogglePasswordVisibility/useTogglePasswordVisibility';
import {useTogglePasswordVisibilityyy} from '../../../components/TogglePasswordVisibility/useTogglePasswordVisibilityyy';
import {Formik} from 'formik';
import * as yup from 'yup';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import colors from '../../../components/colors';
import moment from 'moment';
// create a component

const SignUpScreen = ({navigation}) => {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const {passwordVisibility1, rightIcon1, handlePasswordVisibility1} =
    useTogglePasswordVisibilityyy();

  // const [password, setPassword] = useState('');
  // const [password1, setPassword1] = useState('');
  const [loginerr, setLoginerr] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [show, setshow] = useState(false);
  console.log(date);
  const validateEmail = email => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
  };

  const phoneInput = useRef();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/(\w).+/, 'Enter a Name')
      .required('Name is required'),
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

    confirm_password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('A date has been picked: ', date);
    hideDatePicker();
    setDate(date);
    setshow(true);
    setOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // behavior="padding"
        style={{flex: 1, backgroundColor: colors.white}}>
        <SimpleHeader
          size={18}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{flex: 1, backgroundColor: colors.white}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.toptxt}>Create New Account</Text>
            <Text style={styles.toptxt2}>
              Enter Your details to create account
            </Text>
            <View
              style={{
                marginTop: hp('4'),
              }}
            />
            {/* <TextInputLabel
            // label="rrrr"
            iconType={'AntDesign'}
            name={'checkcircleo'}
            iconColor={'#FAFAFA'}
            //   namew={'email'}
            placeHolder="Name"
            //   inputStyle={{marginTop:hp('25')}}
          />
          <TextInputLabel
            // label="rrrr"
            iconType={'AntDesign'}
            name={'checkcircleo'}
            iconColor={'#7DB027'}
            namew={'email'}
            placeHolder="Email"
            //   inputStyle={{marginTop:hp('25')}}
          />

          <TextInputLabel
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

          <View
            style={{
              marginTop: hp('6'),
            }}>
            <SubmitBtn1
              // style={{
              //   width: wp('90'),
              //   height: hp('8'),
              //   backgroundColor: '#7DB027',
              //   borderColor: '#7DB027',
              //   borderRadius: 5,
              //   marginTop:hp('4')
              // }}
              // txtStyle={{color: '#fff', fontWeight: 'bold'}}
              style={{
                width: wp('90'),
                height: hp('8'),
                backgroundColor: '#222222',
                borderColor: '#222222',
                borderRadius: 5,
                marginTop: hp('3'),
              }}
              txtStyle={{color: '#fff', fontWeight: 'bold'}}
              label="Sign Up"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </View> */}

            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{
                email: '',
                password: '',
                name: '',
                confirm_password: '',
              }}
              // onSubmit={async(values) => {
              //   setEmail(values.email);
              //   setPassword(values.password);
              //   await mySubmitData();
              //   // setResp(values);
              //   // console.log('info',values);
              //   // Alert.alert('Success');
              // }}
              onSubmit={values => {
                // eslint-disable-next-line no-undef
                handleSubmit(values);
                // console.log('values', values);
              }}>
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
                      placeholder="First Name"
                      style={styles.textc}
                      onChangeText={handleChange('firstname')}
                      onBlur={handleBlur('firstname')}
                      // onBlur={() => {
                      //   handleBlur('name');
                      //   // validateEmail(values.name);
                      // }}
                      value={values.name}
                      keyboardType="email-address"
                    />
                    {/* <Icons
                    iconType={'AntDesign'}
                    name="checkcircleo"
                    size={20}
                    color={isEmailValid ? 'green' : 'grey'}
                    style={{marginRight: wp('1')}}
                  /> */}
                  </View>
                  {errors.name && touched.name && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}
                  <View style={styles.textb}>
                    <TextInput
                      placeholder="Last Name"
                      style={styles.textc}
                      onChangeText={handleChange('lastname')}
                      onBlur={handleBlur('lastname')}
                      // onBlur={() => {
                      //   handleBlur('name');
                      //   // validateEmail(values.name);
                      // }}
                      value={values.name}
                      keyboardType="email-address"
                    />
                    {/* <Icons
                    iconType={'AntDesign'}
                    name="checkcircleo"
                    size={20}
                    color={isEmailValid ? 'green' : 'grey'}
                    style={{marginRight: wp('1')}}
                  /> */}
                  </View>
                  {errors.name && touched.name && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}

                  <View
                    style={{
                      marginTop: hp('2.5%'),
                      alignItems: 'center',
                      flexDirection: 'row',
                      // borderRadius: 10,
                      alignSelf: 'center',
                      backgroundColor: '#fff',
                      // height: 55,
                      width: wp('90%'),
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontSize: wp('4'), marginLeft: wp('4%')}}>
                        Date Of Birth
                      </Text>
                      <Text style={{fontSize: wp('3'), alignSelf: 'center'}}>
                        (Optional)
                      </Text>
                    </View>
                    <View
                      style={{
                        // marginTop: hp('2.5%'),
                        alignItems: 'center',
                        // flexDirection: 'row',
                        borderRadius: 10,
                        // alignSelf: 'center',
                        backgroundColor: '#FAFAFA',
                        height: 55,
                        width: wp('50%'),
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity onPress={showDatePicker}>
                        <Text
                          style={{
                            fontWeight: 'normal',
                            fontSize: wp('4'),
                            // marginRight: 12,
                            // width: wp('70%'),
                            marginLeft: wp('3'),
                            color: date ? 'black' : 'gray',
                            // backgroundColor:'red'
                          }}>
                          {show
                            ? `${moment(date).format('MM/DD/YYYY')}     ${date
                                .toTimeString()
                                .substring(0, 0)}`
                            : 'MM/DD/YYYY'}
                        </Text>
                      </TouchableOpacity>
                      <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                      />
                    </View>
                  </View>
                  <View style={styles.toptphoneInput}>
                    <PhoneInput
                      ref={phoneInput}
                      defaultValue={value}
                      defaultCode="IN"
                      layout="first"
                      onChangeText={text => {
                        setValue(text);
                      }}
                      onChangeFormattedText={text => {
                        setFormattedValue(text);
                      }}
                      withDarkTheme
                      withShadow={false}
                      containerStyle={{
                        height: 55,
                        borderRadius: 10,
                        backgroundColor: '#FAFAFA',
                      }}
                      textContainerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: hp('8'),
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      textInputStyle={{
                        paddingTop: hp('0'),
                        paddingBottom: hp('0'),
                      }}
                    />
                    {/* <Icons
            onPress={clearPhoneInput}
            iconType={'AntDesign'}
            name={'closecircleo'}
            size={20}
            color={'#222222'}
          /> */}
                  </View>

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

                  {/* {isEmailValid === false ? (
                  <>
                    {errors.email && touched.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                  </>
                ) : null} */}

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

                  <View style={styles.textd}>
                    {/* <Icon
                    name="lock"
                    size={20}
                    color="black"
                    style={{marginLeft: 10, width: wp('5%')}}></Icon> */}
                    <TextInput
                      placeholder="Confirm Password"
                      style={styles.texte}
                      onChangeText={handleChange('confirm_password')}
                      onBlur={handleBlur('confirm_password')}
                      value={values.confirm_password}
                      secureTextEntry={passwordVisibility1}
                      // secureTextEntry
                    />
                    <Pressable onPress={handlePasswordVisibility1}>
                      <Icons
                        iconType={'Ionicons'}
                        name={rightIcon1}
                        size={20}
                        color="black"
                        style={{marginRight: 0}}
                      />
                    </Pressable>
                  </View>
                  {errors.confirm_password && touched.confirm_password && (
                    <Text style={styles.errorText}>
                      {errors.confirm_password}
                    </Text>
                  )}
                  {/* {loginerr && (
                    <Text style={styles.errorlogintxt}>{loginerr}</Text>
                  )} */}

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
                    label="Sign Up"
                    onPress={() => {
                      // if (values.password !== '' && !errors.password) {
                        navigation.navigate('LoginScreen');
                      // }
                    }}
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
                  }}>
                  Already Have Account?
                </Text>
              </View>
              <View style={styles.signinicon}>
                <Text
                  style={styles.signin}
                  onPress={() => navigation.navigate('LoginScreen')}>
                  Sign In
                </Text>
                <Icons
                  iconType={'AntDesign'}
                  name={'caretright'}
                  size={15}
                  color={'#000000'}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
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
    marginTop: hp('5'),
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
    fontSize: wp('6.5'),
    marginTop: hp('2'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-SemiBold',
  },
  toptxt2: {
    color: 'grey',
    fontSize: wp('3.5'),
    marginTop: hp('1'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-Regular',
  },

  //login
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
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    borderRadius: 10,
    width: wp('90%'),
    // marginTop: hp('30'),
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
  toptphoneInput: {
    alignSelf: 'center',
    marginTop: hp('2'),
    flexDirection: 'row',
    width: wp('90'),
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
  },
});

//make this component available to the app
export default SignUpScreen;
