import {StyleSheet} from 'react-native';
import colors from '../../components/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: hp('10%'),
  },
  profileheader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    height: hp('7%'),
  },
  headingtxt:{
    fontSize:wp('5'),
    fontFamily:'Poppins-SemiBold',
    color:colors.black,
    marginLeft:wp('2'),
    top:hp('0.5')
  },
  titlemain: {
    alignItems: 'center',
    height: hp('7%'),
    justifyContent:'center',
    backgroundColor:'red'
  },
  usrname:{
    fontSize:wp('4'),
    fontFamily:'Poppins-SemiBold',
    color:colors.black,
    marginLeft:wp('16'),

  },
  email:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    alignContent:'center'
  },
  pnumber:{
    fontSize:wp('4'),
    fontFamily:'Poppins-SemiBold',
    color:colors.gray,
    marginLeft:wp('16'),
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius:180/2
  },
  usrprofile: {
   marginHorizontal:wp('5'),
   marginVertical:hp('3')
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  usremail: {
    color: colors.black,
    fontSize: wp('4'),
    marginLeft:wp('3'),
  },
  profileitem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth:1,
    borderTopColor:colors.gray,
    width: wp('90'),
    alignSelf:'center',
    height:hp('10')
  },
  screens: {
    color: colors.black,
    fontSize: wp('4'),
    marginLeft:wp('8'),
    fontFamily:'Poppins-SemiBold',
    top:hp('0.5')
  },
  buttonContainer: {
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor:'red'
    // padding: 10,
  },
  filterButton: {
    height: hp(6),
    width: wp(14),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#F9A207',
  },
  filterIcon: {
    height: hp('3'),
    width: wp('6'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  searchBar: {
    backgroundColor: '#F9A207',
  },
  ftcontainer: {
    height: 100,
    paddingVertical: 2,
  },
  // categoryItem: {
  //   width: wp('25%'),
  //   padding: 15,
  //   marginHorizontal: 15,
  //   backgroundColor: 'red',
  //   borderRadius: 10,
  //   justifyContent: 'center',
  // },
  // categoryName: {
  //   fontSize: 16,
  //   color:'red'
  // },
  bestvalue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('2.5'),
    marginTop: hp('2%'),
    // backgroundColor: 'pink',
  },
  topseller: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    // backgroundColor: 'red',
    marginRight: wp('10'),
  },
  itemview: {
    fontSize: 14,
    fontFamily: 'Poppins-BoldItalic',
    color: 'black',
  },
  viewAll: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: 'black',
  },
  categoryview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: hp('2%'),
    // backgroundColor:'red'
  },
  banner: {
    height: hp('20%'),
    marginVertical: hp('2'),
    // backgroundColor:'green',
    width: wp('95%'),
    alignSelf: 'center',
    borderRadius: hp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default homeStyles;
