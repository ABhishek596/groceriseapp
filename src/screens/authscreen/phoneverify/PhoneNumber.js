import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from '../../../components/icons/Icons';
import {SimpleHeader} from '../../../components/file';
import {
  SubmitBtn1,
  FormInputField,
  FormMaxInputField,
} from '../../../components/file';
import PhoneInput from 'react-native-phone-number-input';
// import LinearGradient from 'react-native-linear-gradient';

const PhoneNumber = ({navigation}) => {
  const phoneInput = useRef();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  // console.log('phoneInput.current', phoneInput.current);

  // console.log('phoneInput.current111111111', phoneInput.current._reactInternals.memoizedProps.autoFocus);

  const clearPhoneInput = () => {
    setValue('');
    // setFormattedValue('');
    // if (phoneInput.current) {
    //   phoneInput.current.focus();
    //}
  };

  console.log('value', value);

  return (
    <View style={styles.container}>
      <View
        // colors={['#f8fff2', '#eaffe1','#e8fadf', '#f7fbdb']}
        style={styles.linearGradient}>
        <SimpleHeader
          size={18}
          name={'Verify Phone Number'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.toptxt}>
          We have send you on SMS with a code to
        </Text>
        <Text style={styles.toptxt2}>number +9112345678900</Text>
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
            autoFocus
            withDarkTheme
            withShadow={false}
            containerStyle={{
              height: hp('8'),
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
            textInputStyle={{paddingTop: hp('0'), paddingBottom: hp('0')}}
          />
          <Icons
            onPress={clearPhoneInput}
            iconType={'AntDesign'}
            name={'closecircleo'}
            size={20}
            color={'#222222'}
          />
        </View>
        <View
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
              marginTop: hp('5'),
            }}
            txtStyle={{color: '#fff', fontWeight: 'bold'}}
            label="Confirm"
            onPress={() => navigation.navigate('OtpVerification')}
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
    marginTop: hp('1'),
    marginLeft: wp('5'),
    fontFamily: 'Poppins-Regular',
  },
  toptphoneInput: {
    alignSelf: 'center',
    marginTop: hp('10'),
    flexDirection: 'row',
    width: wp('90'),
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1,
  },
});

export default PhoneNumber;
