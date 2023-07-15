import {StyleSheet,Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from './colors';
// import mainStyles from './mainStyle';

const styles = StyleSheet.create({
  inputContainer: (val, error, disable) => ({
    width: wp('90'),
    height: hp('6'),
    alignSelf: 'center',
    justifyContent:'center',
    borderWidth: val ? 1 : 1,
    borderRadius: 4,
    borderColor: val
      ? colors.process + 60
      : error
      ? colors.error
      : colors.inputBorderColor,
    borderBottomColor: val
      ? colors.process
      : error
      ? colors.error
      : colors.inputBorderColor,
    borderBottomWidth: val ? 1.5 : 1,
    backgroundColor: disable  ? colors.inputBorderColor : colors.white,
  }),
  smaillInputContainer: (val, error, disable) => ({
    width: wp('42'),
    height: hp('6'),
    backgroundColor: disable  ? colors.inputBorderColor : colors.white,
    alignSelf: 'center',
    justifyContent:'center',
    borderWidth: val ? 1 : 1,
    borderRadius: 4,
    borderColor: val
      ? colors.process + 60
      : error
      ? colors.error
      : colors.inputBorderColor,
    borderBottomColor: val
      ? colors.process
      : error
      ? colors.error
      : colors.inputBorderColor,
    borderBottomWidth: val ? 1.5 : 1,
  }),
  fieldMainTxt: {
    alignSelf: 'flex-start',
    color: colors.themeColor,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    fontSize: hp('1.6%'),
  },
  maxInputContainer:  (val, error) => ({
    height: hp('20'),
    width: wp('90'),
    borderColor: val
    ? colors.process + 60
    : error
    ? colors.error
    : colors.inputBorderColor,
  borderBottomColor: val
    ? colors.process
    : error
    ? colors.error
    : colors.inputBorderColor,
  borderBottomWidth: val ? 1.5 : 1,
    borderWidth: 1,
    borderRadius: 4,
  }),
  submitBtnContainer: val => ({
    width: wp('90%'),
    height: hp('7.5'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    alignSelf: 'center',
    backgroundColor:val ? colors.process : colors.process,
  }),
  roundBtnContainer: val => ({
    width: wp('17.4%'),
    height: wp('17.4'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('18'),
    borderWidth: 2,
    borderColor: val ? colors.process : colors.inactive,
    alignSelf: 'center',
    backgroundColor: colors.white,
  }),
  submitBtnContainer2: {
    width: wp('80'),
    height: hp('4.5'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: colors.mainColor,
  },
  submitBtnContainer1: {
    width: wp('74%'),
    height: hp('7.5'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('7%'),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  underLine: {
    borderWidth: hp('.1'),
    borderColor: colors.lightgray,
    width: wp('75'),
    alignSelf: 'center',
  },
  submitBtnLabel: {
    color: colors.white,
    fontSize: hp('1.9%'),
    fontWeight: '500',
    fontFamily: 'Roboto-Medium',
    textTransform: 'uppercase',
    letterSpacing: 0.02,
    fontStyle: 'normal',
  },
 
  submitBtnLabel1: {
    color: colors.primary,
    fontSize: hp('1.8%'),
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.02,
    fontStyle: 'normal',
  },
  container: {
    alignSelf: 'center',
    width: wp('90'),
  },
  containerSmall: {
    alignSelf: 'center',
    width: wp('42'),
  },
  containerMax: {
    marginBottom: hp('1.5'),
    alignSelf: 'center',
    width: '90%',
  },

  txt: {
    alignSelf: 'center',
    color: colors.themePrimary,
    fontFamily: 'Roboto-Medium',
    fontWeight: '600',
    fontSize: hp('1.7%'),
  },
  styleIcon: {
    padding: hp('.5'),
    borderRadius: hp('1'),
  },
  myTextIconView: {
    margin: wp('2'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  myTextIconViewBackSide: {
    margin: wp('2'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: '80%',
  },

  maxtextInputStyle: {
    fontSize: hp('1.7'),
    left: 5,
    fontWeight: '500',
    fontFamily: 'Roboto-Medium',
    color: colors.black,
  },
  iconsContainers: {
    flexDirection: 'row',
    borderRightColor: colors.lightgray,
    marginLeft:wp('0.5'),
  },
  codeTextStyle: {
    backgroundColor: 'transparent',
    fontSize: hp('2'),
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    marginLeft: wp('3%'),
  },
  textInputContainer: {justifyContent: 'center', marginLeft: wp('1')},
  textInputStyles: {
    backgroundColor: '#fff',
    fontSize: hp('2%'),
    width: wp('59%'),
    fontFamily: 'Roboto-Medium',
    fontWeight: '600',
  },

  txtHighlight:{
    fontSize: hp('2.2%'),
    fontWeight: '400',
    paddingTop: hp('2.5'),
    paddingBottom: hp('1.5'),
    marginTop: hp('2'),
    alignSelf: 'center',
    width: wp('90%'),
    fontFamily: 'Roboto-Medium',
    color: colors.black,
  },
  txtHighlightBold:{
    fontWeight: '700',
    color: colors.primary,
  },
  btn: {
    width: Dimensions.get('window').width - 40,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    width: wp('90'),
    alignSelf: 'center',
    marginTop: hp('2'),
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:hp('1')
  },
  round: {
    width: wp('10'),
    height: wp('10'),
    borderWidth: 2,
    borderColor: '#808080' + 30,
    borderRadius: 180 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtab:{
    fontSize: wp('5'),
    fontFamily: 'Poppins-SemiBold',
    alignSelf:'center',
    color:colors.black,
  },
  //header
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('7%'),
    width: wp('95'),
    alignSelf: 'center',
  },
  userImage: {
    width: wp('9'),
    height: wp('9'),
    borderRadius: 180 / 2,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp('2'),
    alignItems: 'center',
    width: wp('76.5'),
  },
  userName: {
    color: colors.black,
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: wp('4'),
    fontFamily: 'Poppins-SemiBold',
  },
  address: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  addressText: {
    color: colors.black,
    fontSize: wp('2.6'),
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    padding: wp('1.2'),
    backgroundColor: colors.white,
    borderRadius: wp('2'),
    top: hp('0.1'),
  },
});
export default styles;
