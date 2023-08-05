import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import colors from '../../../components/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from '../../../components/icons/Icons';
import PhoneInput from 'react-native-phone-number-input';
import {SubmitBtn1} from '../../../components/file';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CustomDropdown from '../../../components/customDropdown/CustomDropdown';
const EditProfile = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [first, onChangefirst] = useState('');
  const [last, onChangelast] = useState('');
  const [email, onChangeemail] = useState('');
  const phoneInput = useRef();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [show, setshow] = useState(false);

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

  const [opena, setOpena] = useState(false);
  const [valuea, setValuea] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ]);
  // console.log('Gender', valuea);
  //   const [text, onChangeText] = useState('Useless Text');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // behavior="padding"
        style={{flex: 1, backgroundColor: colors.white}}>
        <View style={styles.profileheader}>
          <View>
            <Icons
              name={'angle-left'}
              iconType={'FontAwesome'}
              size={30}
              style={{marginHorizontal: wp('4')}}
              color={colors.black}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>

          <View>
            <Text style={styles.headingtxt}>Edit Profile</Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: colors.white}}>
          <ScrollView
          // contentContainerStyle={styles.container}
          // keyboardShouldPersistTaps="handled"
          // style={{flexGrow:1}}
          >
            <View style={{height: hp('2')}}></View>
            <Text style={styles.inputtitle}>First Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangefirst}
              value={first}
              placeholder="--  --"
              keyboardType="email-address"
            />
            <Text style={styles.inputtitle}>Last Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangelast}
              value={last}
              placeholder="--  --"
              keyboardType="email-address"
            />
            <Text style={styles.inputtitleMobile}>Mobile Number</Text>
            <View>
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
                  alignSelf: 'center',
                  width: wp('95'),
                }}
                textContainerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: hp('8'),
                  backgroundColor: '#ffffff',
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
            {/* <View style={{height:200}}></View> */}
            <Text style={styles.inputtitle}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeemail}
              value={email}
              placeholder="email"
              keyboardType="email-address"
            />

            <View style={{height: hp('1')}}></View>

            <Text style={styles.inputtitle}>Gender</Text>

            <View
              style={{
                width: wp('90'),
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                top: hp('-1'),
              }}>
              <CustomDropdown />
            </View>
            <View style={{marginTop: hp('-2')}}>
              <Text style={styles.inputtitle}>Date of Birth</Text>
            </View>
            <View
              style={{
                // marginTop: hp('2.5%'),
                alignItems: 'center',
                // flexDirection: 'row',
                // borderRadius: 10,
                // alignSelf: 'center',
                backgroundColor: '#ffffff',
                height: 55,
                width: wp('35%'),
                justifyContent: 'center',
                marginLeft: wp('3'),
              }}>
              <TouchableOpacity onPress={showDatePicker}>
                <Text
                  style={{
                    fontWeight: 'normal',
                    fontSize: wp('5'),
                    // marginRight: 12,
                    // width: wp('70%'),
                    marginLeft: wp('3'),
                    color: date ? 'black' : 'gray',
                    // backgroundColor:'red'
                  }}>
                  {show
                    ? `${moment(date).format('DD/MM/YYYY')}     ${date
                        .toTimeString()
                        .substring(0, 0)}`
                    : 'DD/MM/YYYY'}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            <View style={{paddingBottom: hp('2'), alignSelf: 'center'}}>
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
                  marginTop: hp('10'),
                }}
                txtStyle={{color: '#fff', fontWeight: 'bold'}}
                label="Save"
                // onPress={() => {
                //   if (values.password !== '' && !errors.password) {
                //     navigation.navigate('LoginScreen');
                //   }
                // }}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingBottom: hp('10%'),
  },
  profileheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: hp('7%'),
  },
  headingtxt: {
    fontSize: wp('5'),
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
    marginLeft: wp('2'),
    top: hp('0.5'),
  },
  inputtitle: {
    fontSize: wp('4'),
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
    marginLeft: wp('6'),
    marginTop: hp('2'),
  },
  inputtitleMobile: {
    fontSize: wp('4'),
    fontFamily: 'Poppins-SemiBold',
    color: colors.gray,
    marginLeft: wp('6'),
    marginTop: hp('2'),
  },
  input: {
    height: 40,
    // margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.black + 80,
    // backgroundColor:'red',
    width: wp('90'),
    alignSelf: 'center',
  },
});

export default EditProfile;
