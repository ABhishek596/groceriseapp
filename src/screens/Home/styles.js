import {StyleSheet} from 'react-native';
import colors from '../../components/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor1,
    paddingBottom: hp('10%'),
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: hp('10%'),
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  userName: {
    color: colors.black,
    flexDirection: 'row',
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 12,
  },
  address: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  addressText: {
    color: colors.black,
    marginLeft: 1,
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
