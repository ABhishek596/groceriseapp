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
import LinearGradient from 'react-native-linear-gradient';

// create a component
const ChangePassword = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const {passwordVisibility1, rightIcon1, handlePasswordVisibility1} =
    useTogglePasswordVisibilityyy();
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
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

        <TextInputLabel
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
        />

        <TextInputLabel
          // label="rrrr"
          iconType={'Ionicons'}
          name={rightIcon1}
          iconColor={'grey'}
          namew={'lock'}
          placeHolder="New Password"
          value={password1}
          secureTextEntry={passwordVisibility1}
          onChangeText={password => setPassword1(password)}
          onPressRight={handlePasswordVisibility1}
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
            onPress={() => setModalVisible(true)} // navigation.navigate('PhoneNumber')
          />
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ImageBackground
                  source={require('../../../../assets/images/pop.jpg')}
                  resizeMode="cover"
                  borderRadius={20}
                  style={styles.image}>
                  <SubmitBtn
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
                      navigation.navigate('LoginScreen');
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
  linearGradient: {
    flex: 1,
  },
});

//make this component available to the app
export default ChangePassword;
