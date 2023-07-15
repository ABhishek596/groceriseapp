//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
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
import { useTogglePasswordVisibility } from '../../../components/TogglePasswordVisibility/useTogglePasswordVisibility';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const SignUpScreen = ({navigation}) => {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
  useTogglePasswordVisibility();
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
         <View
        // colors={['#f8fff2', '#eaffe1','#e8fadf', '#f7fbdb']}
        style={styles.linearGradient}>
      <SimpleHeader size={18} onPress={()=>{navigation.goBack()} }/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.toptxt}>Create New Account</Text>
      <Text style={styles.toptxt2}>Enter Your details to create account</Text>
      <TextInputLabel
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
            style={{
              width: wp('90'),
              height: hp('8'),
              backgroundColor: '#7DB027',
              borderColor: '#7DB027',
              borderRadius: 5,
              marginTop:hp('4')
            }}
            txtStyle={{color: '#fff', fontWeight: 'bold'}}
            label="Sign Up"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
        <View style={styles.bottomline}>
          <View style={styles.account}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#000000',
              fontSize: wp('3.2'),
              marginTop: hp('2'),
              fontFamily: 'Poppins-Regular',
              bottom:hp('0.5')
              //paddingBottom: hp('10'),
            }}>
            Already Have Account?
          </Text>
          </View>
          <View style={styles.signinicon}>
            <Text style={styles.signin}>Sign In</Text>
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
    width:wp('100'),
    height:hp('100'),
  },
  bottomline: {
    flexDirection: 'row',
    width: wp('90'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:hp('11')
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
  account:{
    alignContent:'center'
  },
  toptxt: {
    color: '#000000',
    fontSize: wp('6'),
    marginTop: hp('2'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-SemiBold',
  },
  toptxt2: {
    color: 'grey',
    fontSize: wp('4'),
    marginTop: hp('1'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-Regular',
  },
  linearGradient: {
    flex: 1,
  },
});

//make this component available to the app
export default SignUpScreen;
