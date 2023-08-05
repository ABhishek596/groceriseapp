/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {HeaderScreen, SubmitBtn1} from '../../components/file';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header/Header';
//   import Header from '../common/Header';
//   import {useNavigation, useRoute} from '@react-navigation/native';
//   import {SimpleHeader} from '../../constant/file';
//   import {CustomButton} from '../../constant/file';

//   import {useDispatch, useSelector} from 'react-redux';
// import {addItemToWishList} from '../redux/slices/WishlistSlice';
// import {addItemToCart} from '../../redux/slices/CartSlice';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
//   import AskForLoginModal from '../common/AskForLoginModal';
const ProductDetail = ({navigation, route}) => {
  // const newdata = route?.params?.data;
  // const items = useSelector(state => state.wishlist);
  // console.log('idetailssssssssss', JSON.stringify(newdata));

  // const navigation = useNavigation();
  // const route = useRoute();
  // const dispatch = useDispatch();
  // const [qty, setQty] = useState(1);
  // const [modalVisible, setModalVisible] = useState(false);

  // const checkUserStatus = async () => {
  //   let isUserLoggedIn = false;
  //   const status = await AsyncStorage.getItem('IS_USER_LOGGED_IN');
  //   console.log(status);
  //   if (status == null) {
  //     isUserLoggedIn = false;
  //   } else {
  //     isUserLoggedIn = true;
  //   }
  //   console.log(isUserLoggedIn);
  //   return isUserLoggedIn;
  // };

  return (
    <View style={styles.container}>
      {/* <SimpleHeader
          size={28}
          // name={'My Cart'}
          onPress={() => navigation.goBack()}
          // style={{backgroundColor:'red'}}
        /> */}
      {/* <HeaderScreen
        iconTypeLeft={'AntDesign'}
        nameLeft={'arrowleft'}
        iconTypeRight={'AntDesign'}
        nameRight={'hearto'}
      /> */}
      <Header back headertext="ProductDetail" cart />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{'India Gate Basmati'}</Text>
        <Text style={styles.desc}>staples</Text>
        <View style={styles.squre}>
          <ImageBackground
            source={require('../../../assets/images/download111.jpeg')}
            //  resizeMode="cover"
            style={styles.image}
            imageStyle={{borderRadius: wp('8')}}
          />
        </View>
        <Text style={styles.title}>{'Details'}</Text>

        <Text style={styles.desc}>
          Brand INDIA GATE Model Name Regular Choice Rice Type Basmati Rice
          Quantity 5 kg Color White Grain Size Medium Grain Maximum Shelf Life
          24 Months Nutrient Content NA Container Type Bag Net Quantity 5 kg
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.price, {color: '#000'}]}>{'Price:'}</Text>
            <Text style={[styles.price, {color: '#000'}]}>
              {/* {'$' + ' ' + newdata.prize} */}
              {'₹447'}
            </Text>
          </View>
          <View style={styles.qtyView}>
            {/* <TouchableOpacity
              style={styles.btn}
              // onPress={() => {
              //   if (qty > 1) {
              //     setQty(qty - 1);
              //   }
              // }}
            >
              <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qty}>{'qty'}</Text>
            <TouchableOpacity
              style={styles.btn}
              // onPress={() => {
              //   setQty(qty + 1);
              // }}
            >
              <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        {/* <TouchableOpacity
            style={styles.wishlistBtn}
            // onPress={() => {
            //   if (checkUserStatus()) {
            //     dispatch(addItemToWishList(route.params.data));
            //   } else {
            //     setModalVisible(true);
            //   }
            // }}
          >
            <Image
              source={require('../images/wishlist.png')}
              style={styles.icon}
            />
            <Icons
              iconType={'MaterialCommunityIcons'}
              name = 'cards-heart-outline'
              // name={item.whishlist ? 'cards-heart' : 'cards-heart-outline'}
              // color={item.whishlist ? colors.error : colors.inputBorderColor}
              // onPress={() => {
              //   onWhisList(item);
              //   addItem(item);
              // }}
            />
          </TouchableOpacity> */}

        <SubmitBtn1
          // onClick={() => navigation.navigate('CartNavigator', {
          //   screen: 'AddCartScreen'
          //   // params: { data: item },
          // })}
          // onClick={() => {
          //   dispatch(
          //     addItemToCart({
          //       // newdata:newdata,
          //       // qty: qty,
          //       // category: route.params.data.category,
          //       description: route.params.data.des,
          //       id: route.params.data.id,
          //       image: route.params.data.uri,
          //       price: route.params.data.prize,
          //       qty: qty,
          //       title: route.params.data.title,
          // }),
          //   );
          //   navigation.navigate('CartNavigator', {
          //     screen: 'AddCartScreen',
          //   });
          // }}
          // bg={'#FF9A0C'}
          label={'Add To Cart'}
          txtStyle={{color: '#fff'}}
          style={{
            backgroundColor: '#222222',
            borderColor: '#222222',
            width: wp('90'),
            marginTop: hp('5'),
          }}
          onPress={() => navigation.navigate('MyCart')}

          // onClick={() => {
          //   if (checkUserStatus()) {
          //     dispatch(
          //       addItemToCart({
          //         category: route.params.data.category,
          //         description: route.params.data.description,
          //         id: route.params.data.id,
          //         image: route.params.data.image,
          //         price: route.params.data.price,
          //         qty: qty,
          //         rating: route.params.data.rating,
          //         title: route.params.data.title,
          //       }),
          //     );
          //   } else {
          //     setModalVisible(true);
          //   }
          // }}
        />
        <View style={{height: 20}} />
      </ScrollView>
      {/* <AskForLoginModal
            modalVisible={modalVisible}
            onClickLogin={() => {
              setModalVisible(false);
              navigation.navigate('Login');
            }}
            onClose={() => {
              setModalVisible(false);
            }}
            onClickSignup={() => {
              setModalVisible(false);
              navigation.navigate('Signup');
            }}
          /> */}
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: wp('5'),
    color: '#000',
    fontWeight: '600',
    marginLeft: wp('5'),
    marginTop: hp('2'),
    fontFamily: 'Poppins-SemiBold',
  },
  desc: {
    fontSize: wp('3.5'),
    marginHorizontal: wp('5'),
    marginTop: hp('0'),
    fontFamily: 'Poppins-Regular',
  },
  price: {
    color: 'green',
    marginLeft: 20,
    // marginTop: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  wishlistBtn: {
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 24,
    height: 24,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
    marginLeft: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  btn: {
    padding: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
  },
  squre: {
    width: wp('80'),
    height: hp('45'),
    backgroundColor: '#000000',
    borderRadius: wp('8'),
    alignSelf: 'center',
    marginTop: hp('3'),
  },
  image: {
    width: wp('80'),
    height: hp('45'),
  },
  cadrtoptxt: {
    color: '#fff',
    fontSize: wp('6'),
    marginLeft: wp('5'),
    marginTop: hp('4'),
    fontFamily: 'Poppins-SemiBold',
  },
  cadrbottomprice: {
    color: '#fff',
    fontSize: wp('4'),
    marginLeft: wp('5'),
    marginTop: hp('18'),
    fontFamily: 'Poppins-SemiBold',
  },
  cadrbottomrating: {
    color: '#fff',
    fontSize: wp('4'),
    marginLeft: wp('5'),
    // marginTop:hp('4'),
    fontFamily: 'Poppins-Regular',
  },
  bottomrow: {
    flexDirection: 'row',
    width: wp('72'),
    alignSelf: 'center',
    top: hp('1.5'),
    alignItems: 'center',
  },

  round: {
    width: hp('6'),
    height: hp('6'),
    backgroundColor: '#C0C0C0' + 50,
    borderRadius: 180 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('3'),
  },
});
