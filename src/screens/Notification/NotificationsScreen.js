import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  // Pressable,
  Alert,
  Text,
  StyleSheet,
  Image,
  // StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import {SubmitBtn, Mytxt} from '../../components/file';
// import Feather from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../components/colors';
import Header from '../../components/Header/Header';
import Icons from '../../components/icons/Icons';

// import {useDispatch, useSelector} from 'react-redux';
// import {
//   addItemToCart,
//   reduceItemFromCart,
//   removeItemFromCarta,
// } from '../../redux/slices/WishlistSlice';

// import AppStyles from '../../AppStyles';

export default function NotificationsScreen({navigation}) {
  // const items = useSelector(state => state.wishlist);
  // // const dispatch = useDispatch();

  // console.log('itemsssssssssssssssssssss8989889', JSON.stringify(items));
  // console.log('itemsdataitemsdataitemsdata', JSON.stringify(items.data)+ " "+items.data.length);

  // const uniqueArray = [];

  //   items.data.forEach(subArray => {
  //   subArray.forEach(obj => {
  //     const existingObj = uniqueArray.find(item => item.id === obj.id);
  //     if (!existingObj) {
  //       uniqueArray.push(obj);
  //     }
  //   });
  // });

  // console.log("uniqidididddi",uniqueArray);

  // const dispatch = useDispatch();

  // let addedItems = [];
  // addedItems = items;

  // const removeItem = index => {
  //   // const indexone = items.findIndex(product => product.title === index.title); findIndex
  //   // console.log('Dispatching item with index from favourite:', indexone);
  //   dispatch(removeItemFromCart(index));
  // };
  const Notify = [
    {
      id: 1,
      decrip:
        'Get 5% Cashback + $1000 Gift Card* with Saferway Driver Unique BankCredit Card.Hurry! Apply Now',
      title: 'Special OFFER for You!',
      uri: 'https://www.idbibank.in/images/cards/Signature_Debit_Card.jpg',
      time: '1 day ago',
    },
    {
      id: 2,
      decrip:
        'Get 5% Cashback + $1000 Gift Card* with Saferway Driver Unique BankCredit Card.Hurry! Apply Now',
      title: 'Greetings !!',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcMl10LLkJBQFqVkxhnoY-TShr7Fr8VyjUg&usqp=CAU',
      time: 'few minute ago',
    },
    // {
    //   id: 3,
    //   decrip:
    //     'Get 5% Cashback + $1000 Gift Card* with Saferway Driver Unique BankCredit Card.Hurry! Apply Now',
    //   title: 'Lucky draw offer',
    //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYRa8HFT_od6UepUrmQ4uzy3yYQOxkUKM5Q&usqp=CAU',
    //   time: '4 minute ago',
    // },
    // {
    //   id: 4,
    //   decrip:
    //     'Get 5% Cashback + $1000 Gift Card* with Saferway Driver Unique BankCredit Card.Hurry! Apply Now',
    //   title: 'New all Offers for You',
    //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1xTHgekcryVRD49stHCdj6KbbYCxZNvFGA&usqp=CAU',
    //   time: '1 hour ago',
    // },
  ];

  const GridView = ({item, title, uri, time, decrip, index}) => (
    <View style={styles.notifyview}>
      <View style={styles.offersstart}>
        <Icons
          size={20}
          iconType={'Entypo'}
          name={'new'}
          style={{marginLeft: wp('4')}}
        />
        <Text style={styles.offerstxt2}>{title}</Text>
      </View>
      <View style={styles.txtnimg}>
        <Text style={styles.discriptions}>{decrip}</Text>
        <Image style={styles.tinyLogo} source={{uri}} />
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );

  const getOnPressItem = des => {
    Alert.alert(des);
    console.log('click', des);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header back headertext="Notifications" cart />

        <View style={styles.alloffr}>
          <View style={styles.all}>
            <Text style={styles.alltxt}>All</Text>
          </View>
          <View style={styles.offers}>
            <Icons
              size={20}
              iconType={'Entypo'}
              name={'new'}
              style={{marginLeft: wp('4')}}
            />
            <Text style={styles.offerstxt}>Offers</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: hp('1.5'),
          }}
        />

        <View style={{flex:1}}>
          <FlatList
            data={Notify}
            renderItem={({item, index}) => (
              <GridView
                title={item.title}
                uri={item.uri}
                decrip={item.decrip}
                time={item.time}
                id={item.id}
              />
            )}
            keyExtractor={item => item.id}
            key={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    width: wp('90%'),
    height: hp('10%'),
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  wishlisttxtview: {
    marginLeft: wp('2%'),
  },
  icon: {
    justifyContent: 'center',
  },
  iconntext: {
    flexDirection: 'row',
  },
  textstyle: {
    fontSize: 18,
    alignSelf: 'flex-start',
    color: colors.black,
  },
  textstylebottomtxt: {
    fontSize: 12,
    alignSelf: 'flex-start',
    color: colors.gray,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  imagecontainer: {
    // width: wp('95%'),
    // height:hp('90%'),
    // alignSelf: 'center',
    // backgroundColor:'red',
    // padding:10,
  },
  bagtxtview: {
    // borderWidth: 0.5,
    // borderColor: colors.gray,
    borderTopColor: colors.gray,

    marginTop: hp('2%'),
    borderTopWidth: 0.5,
  },
  lefticon: {
    marginTop: hp('1%'),
    marginRight: wp('1%'),
  },
  nowishlist: {
    marginTop: hp('18%'),
    // backgroundColor:'red'
  },
  MainContainer: {
    flex: 1,
    backgroundColor: colors.cream,
    marginTop: 0,
  },

  gridbox: {
    flex: 1,
    // height: 100,
    // margin: 1,
    backgroundColor: colors.cream,
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('95%'),
    marginLeft: wp('2'),
    paddingBottom: 10,
    // alignItems: 'center',
  },

  gridText: {
    fontSize: 24,
    color: 'white',
  },
  noItems: {
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  alloffr: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: hp('2'),
    marginLeft: wp('4'),
  },
  all: {
    width: wp('18'),
    height: hp('5'),
    borderWidth: 1,
    borderColor: colors.black + 40,
    borderRadius: wp('10'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  offers: {
    width: wp('29'),
    height: hp('5'),
    borderWidth: 1,
    borderColor: colors.black + 40,
    borderRadius: wp('10'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: wp('2'),
    flexDirection: 'row',
  },
  alltxt: {
    fontSize: wp('4'),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    top: hp('0.2'),
  },
  offerstxt: {
    fontSize: wp('4'),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    top: hp('0.2'),
    marginLeft: wp('2'),
  },
  offerstxt2: {
    fontSize: wp('3.5'),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    top: hp('0.2'),
    marginLeft: wp('2'),
  },
  notifyview: {
    width: wp('100'),
    height: hp('19'),
    // backgroundColor: 'red',
    backgroundColor: '#FAFAFA',
    alignSelf: 'center',
    borderTopWidth: 0.2,
    borderTopColor: colors.gray,
  },
  offersstart: {
    marginTop: hp('2'),
    borderColor: colors.gray,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: wp('2'),
    flexDirection: 'row',
  },
  txtnimg: {
    width: wp('82'),
    height: hp('9'),
    // backgroundColor: 'yellow',
    alignSelf: 'flex-end',
    marginRight: wp('5'),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: wp('23'),
    height: hp('7'),
    borderRadius: 5,
  },
  discriptions: {
    fontSize: wp('3'),
    color: colors.gray,
    fontFamily: 'Poppins-Regular',
    // backgroundColor: 'green',
    width: wp('50'),
    top: hp('0.5'),
  },
  time: {
    fontSize: wp('3'),
    color: colors.black + 50,
    fontFamily: 'Poppins-Regular',
    marginLeft: wp('13'),
    top: hp('1.4'),
  },
});
