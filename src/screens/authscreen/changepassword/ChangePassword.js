//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Modal,
  Alert,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SubmitBtn1,
  FormInputField,
  FormMaxInputField,
  SubmitBtn,
} from '../../../components/file';
import TextInputLabel from '../../../components/textInputLabel';
import Icons from '../../../components/icons/Icons';
import {SimpleHeader} from '../../../components/file';
import {useTogglePasswordVisibility} from '../../../components/TogglePasswordVisibility/useTogglePasswordVisibility';
import {useTogglePasswordVisibilityyy} from '../../../components/TogglePasswordVisibility/useTogglePasswordVisibilityyy';
import {Formik} from 'formik';
import * as yup from 'yup';
// create a component
const ChangePassword = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const {passwordVisibility1, rightIcon1, handlePasswordVisibility1} =
    useTogglePasswordVisibilityyy();

  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  // console.log('password', password);
  // console.log('password1', password1);
  const [loginerr, setLoginerr] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const signUpValidationSchema = yup.object().shape({
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
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

  return (
    <SafeAreaView style={styles.container}>
      <View
        // colors={['#f8fff2', '#eaffe1', '#e8fadf', '#f7fbdb']}
        style={styles.linearGradient}>
        <SimpleHeader
          size={18}
          name={'Change Password'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.toptxt2}>Enter your New Password</Text>

        {/* <TextInputLabel
          // label="rrrr"
          iconType={'Ionicons'}
          name={rightIcon}
          iconColor={'grey'}
          namew={'lock'}
          placeHolder="Current Password"
          inputStyle={{marginTop: hp('5')}}
          value={password}
          secureTextEntry={passwordVisibility}
          onChangeText={password => setPassword(password)}
          onPressRight={handlePasswordVisibility}
        /> */}

        {/* <TextInputLabel
          // label="rrrr"
          iconType={'Ionicons'}
          name={rightIcon}
          iconColor={'grey'}
          namew={'lock'}
          placeHolder="New Password"
          value={password1}
          secureTextEntry={passwordVisibility}
          onChangeText={password => setPassword1(password)}
          onPressRight={handlePasswordVisibility}
        /> */}
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{email: '', password: '', confirmPassword: ''}}
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
            // setPassword(values.password);
            // setPassword1(values.confirmPassword);
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
              {/* <View style={styles.textb}>
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
                </View> */}
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
                  placeholder="Current Password"
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
              {loginerr && <Text style={styles.errorlogintxt}>{loginerr}</Text>}
              <View style={styles.textd}>
                {/* <Icon
                    name="lock"
                    size={20}
                    color="black"
                    style={{marginLeft: 10, width: wp('5%')}}></Icon> */}
                <TextInput
                  placeholder="New Password"
                  style={styles.texte}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
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
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}

              <View
                style={{
                  marginTop: hp('6'),
                }}
              />
              <SubmitBtn1
                // label={'Sign In'}
                disabled={!isValid}
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
                label="Next"
                onPress={() => {
                  if (values.password === values.confirmPassword) {
                    setModalVisible(true);
                  }
                }}
              />
            </>
          )}
        </Formik>
        {/* <View
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
            onPress={() => setModalVisible(true)} // navigation.navigate('PhoneNumber')
          />
        </View> */}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              // Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ImageBackground
                  source={require('../../../../assets/images/passuc.jpg')}
                  resizeMode="cover"
                  borderRadius={20}
                  style={styles.image}>
                  <SubmitBtn
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      backgroundColor: '#000000',
                      // borderRadius: hp('5%'),
                      height: hp('7%'),
                      width: wp('60%'),
                      top: hp('27'),
                    }}
                    label="done"
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      navigation.navigate('AuthStackNavigator', {
                        screen: 'LoginScreen',
                      });
                    }}
                  />
                </ImageBackground>
              </View>
            </View>
          </Modal>
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
    fontSize: wp('4'),
    marginTop: hp('4'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-Regular',
  },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#000000' + 95,
    width: wp('100'),
    height: hp('100'),
    justifyContent: 'center',
    // backgroundColor: 'white',
    // borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    // flex: 1,
    width: wp('90'),
    height: hp('70'),
    justifyContent: 'center',
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
export default ChangePassword;
