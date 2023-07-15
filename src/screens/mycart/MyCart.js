import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  SubmitBtn1,
  FormInputField,
  FormMaxInputField,
  Mytxt,
  HeaderScreentxt,
} from '../../components/file';
import colors from '../../components/colors';
import Icons from '../../components/icons/Icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const MyCart = () => {
  return (
    <View style={styles.container}>
      <HeaderScreentxt
        iconTypeLeft={'AntDesign'}
        nameLeft={'arrowleft'}
        txt={'My Cart'}
      />
      <ScrollView>
        <View style={{height: hp('4')}}></View>

        <View style={styles.listitem}>
          <View style={styles.txtimage}>
            <View>
              <ImageBackground
                style={styles.imagecontain}
                source={require('../../../assets/images/download111.jpeg')}
                resizeMode="cover"
                imageStyle={{borderRadius: wp('4')}}
                // source={{uri}}
              >
                <View style={styles.cross}></View>
              </ImageBackground>
            </View>

            <View style={styles.txtcontainer}>
              <Mytxt style={styles.toptxt} txt={'India Gate Basmati'} />
              <Mytxt style={styles.middletxt} txt={'$435.00'} />
              <Mytxt style={styles.bottomtxt} txt={'750G'} />

              <View style={styles.activity}>
                <Pressable
                // onPress={() => {
                //   if (item.qty > 1) {
                //     dispatch(reduceItemFromCart(item));
                //   } else {
                //     dispatch(removeItemFromCart(index));
                //   }
                // }}
                >
                  <View style={styles.minus}>
                    <Icons
                      name={'minus'}
                      iconType={'AntDesign'}
                      size={14}
                      color={colors.black}
                    />
                  </View>
                </Pressable>
                <View style={styles.value}>
                  <Mytxt style={styles.increse1} txt={'4'} />
                  {/* {counter} */}
                </View>
                <Pressable
                // onPress={() => {
                //   dispatch(addItemToCart(item));
                // }}
                >
                  <View style={styles.plus}>
                    <Icons
                      name={'plus'}
                      iconType={'AntDesign'}
                      size={14}
                      color={colors.black}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.cut}>
              <Icons
                name={'close'}
                iconType={'EvilIcons'}
                size={25}
                color={colors.gray}
                // onPress={() => {
                //   dispatch(removeItemFromCart(index));
                // }}
              />
            </View>
          </View>
        </View>
        <View style={styles.listitem}>
          <View style={styles.txtimage}>
            <View>
              <ImageBackground
                style={styles.imagecontain}
                source={require('../../../assets/images/grosry.png')}
                resizeMode="cover"
                imageStyle={{borderRadius: wp('4')}}
                // source={{uri}}
              >
                <View style={styles.cross}></View>
              </ImageBackground>
            </View>

            <View style={styles.txtcontainer}>
              <Mytxt style={styles.toptxt} txt={'India Gate Basmati'} />
              <Mytxt style={styles.middletxt} txt={'$435.00'} />
              <Mytxt style={styles.bottomtxt} txt={'750G'} />

              <View style={styles.activity}>
                <Pressable
                // onPress={() => {
                //   if (item.qty > 1) {
                //     dispatch(reduceItemFromCart(item));
                //   } else {
                //     dispatch(removeItemFromCart(index));
                //   }
                // }}
                >
                  <View style={styles.minus}>
                    <Icons
                      name={'minus'}
                      iconType={'AntDesign'}
                      size={14}
                      color={colors.black}
                    />
                  </View>
                </Pressable>
                <View style={styles.value}>
                  <Mytxt style={styles.increse1} txt={'4'} />
                  {/* {counter} */}
                </View>
                <Pressable
                // onPress={() => {
                //   dispatch(addItemToCart(item));
                // }}
                >
                  <View style={styles.plus}>
                    <Icons
                      name={'plus'}
                      iconType={'AntDesign'}
                      size={14}
                      color={colors.black}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.cut}>
              <Icons
                name={'close'}
                iconType={'EvilIcons'}
                size={25}
                color={colors.gray}
                // onPress={() => {
                //   dispatch(removeItemFromCart(index));
                // }}
              />
            </View>
          </View>
        </View>
        <View style={{height: hp('20')}}></View>
        <View style={styles.details}>
          <View style={styles.detailsincenter}>
            <View style={styles.billing}>
              <View style={styles.billingtxt}>
                <Mytxt txt={'Subtotal'} style={styles.txtstyle} />
                <Mytxt txt={'Estimated Tax'} style={styles.txtstyle} />
                <Mytxt txt={'Shipping'} style={styles.txtstyle} />
              </View>
              <View>
                <Mytxt txt={'₹ '} style={styles.txtstyleprice} />
                <Mytxt txt={'₹ 0.00'} style={styles.txtstyleprice} />
                <Mytxt txt={'₹ 0.00'} style={styles.txtstyleprice} />
              </View>
            </View>
            <View style={styles.shipping}>
              <View style={styles.totalamt}>
                <View>
                  <Mytxt txt={'Total amount'} style={styles.txtstyle1} />
                </View>
                <View>
                  <Mytxt txt={'₹'} style={styles.txtstyle} />
                </View>
              </View>
              <View style={styles.addressView}>
                <Text style={styles.title}>Address</Text>
                <Text
                  style={[
                    styles.title,
                    {textDecorationLine: 'underline', color: '#0269A0FB'},
                  ]}
                  //   onPress={() => {
                  //     navigation.navigate('Addresses');
                  //   }}
                >
                  Edit Address
                </Text>
              </View>
              <Text
                style={[
                  styles.title,
                  {marginTop: hp('1'), fontSize:wp('4.5'), color: '#636363'},
                ]}>
                {'selectedAddress'}
              </Text>
              {/* <Mytxt txt={'Shipping method'} style={styles.shippingmethod} /> */}
              {/* <View style={styles.formInputfield}>
                <FormInputField
                  placeholder="Standard (3-7 business days)"
                  inputContainerStyle={{
                    // backgroundColor: 'red',
                    backgroundColor: 'colors.cream',
                    borderWidth: 0,
                    height: hp('6%'),
                  }}
                  containerStyle={{
                    backgroundColor: 'colors.cream',
                    // marginTop: hp('4%'),
                  }}
                  keyboardType="email-address"
                  textInputStyle={{fontSize: 14}}
                  // value={}
                />
              </View> */}
            </View>
          </View>
        </View>

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
          label={'Checkout'}
          txtStyle={{color: '#fff'}}
          style={{
            backgroundColor: '#222222',
            borderColor: '#222222',
            width: wp('90'),
            marginTop: hp('0'),
          }}
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
        <View style={{height: hp('3')}}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listitem: {
    height: hp('20%'),
    width: wp('90%'),
    // borderTopColor: colors.inputBorderColor,
    // borderTopWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp('3'),
    // backgroundColor:'red'
  },
  txtimage: {
    flexDirection: 'row',
  },
  imagecontain: {
    height: hp('20%'),
    width: wp('35%'),
  },
  txtcontainer: {
    marginLeft: wp('5%'),
  },
  toptxt: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  middletxt: {
    alignSelf: 'flex-start',
    color: colors.black,
    fontSize: 14,
    marginTop: hp('0.5%'),
  },
  bottomtxt: {
    color: colors.gray,
    alignSelf: 'flex-start',
    fontSize: 12,
    marginTop: hp('0.5%'),
  },
  cut: {
    alignSelf: 'flex-end',
    top: hp('8'),
    // bottom: hp('9.5%'),
  },
  minus: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 180 / 2,
    height: hp('4%'),
    width: hp('4%'),
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  plus: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 180 / 2,
    height: hp('4%'),
    width: hp('4%'),
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  // increse:{
  //   color:colors.black,
  // },
  increse1: {
    color: colors.black,
    marginHorizontal: wp('5'),
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    top: hp('5'),
  },

  //import details
  contain: {
    flex: 5,
    // top: hp('31%'),
    // width: wp('90%'),
    // height: hp('81.6%'),
    backgroundColor: colors.cream,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // justifyContent: 'space-between',       //add
  },
  containerbottom: {
    flex: 1,
    backgroundColor: colors.cream, //add
  },
  flatlist: {
    flex: 1,
    backgroundColor: colors.cream,

    // justifyContent: 'center',        //add
  },
  details: {
    backgroundColor: colors.cream,
    height: hp('45%'),
    // justifyContent: 'center',      //add
  },
  detailsincenter: {
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: colors.cream,
  },
  price: {
    flex: 1,
    backgroundColor: colors.green,

    // justifyContent: 'center',      //add
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
    height: hp('8%'),
  },
  mycarttxt: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  mycart: {
    fontSize: 18,
    color: colors.black,
    // justifyContent: 'center',
  },
  items: {
    fontSize: 14,
    color: colors.gray,
  },

  //flat list view
  //   listitem: {
  //     height: hp('15%'),
  //     width: wp('90%'),
  //     // justifyContent: 'center',
  //     borderTopColor: colors.inputBorderColor,
  //     borderTopWidth: 1,
  //     alignSelf: 'center',
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //   },
  //   imagecontain: {
  //     height: hp('10%'),
  //     width: wp('18%'),
  //     borderRadius: 10,
  //   },
  increse: {
    fontSize: 16,
    color: colors.black,
    marginRight: wp('4'),
  },
  txtimage: {
    flexDirection: 'row',
  },
  txtcontainer: {
    marginLeft: wp('5%'),
    // justifyContent: 'center',
  },
  toptxt: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  middletxt: {
    alignSelf: 'flex-start',
    color: colors.black,
    fontSize: 14,
    marginTop: hp('1%'),
  },
  bottomtxt: {
    color: colors.gray,
    alignSelf: 'flex-start',
    fontSize: 12,
    marginTop: hp('1%'),
  },
  //   activity: {
  //     flexDirection: 'row',
  //     // marginTop: hp('3%'),

  //     // alignContent:'flex-start'
  //     // justifyContent
  //   },
  //   minus: {
  //     justifyContent: 'center',
  //     marginRight: wp('1'),
  //   },
  //   plus: {
  //     justifyContent: 'center',
  //   },
  totalamtext: {
    height: hp('8%'),
    width: wp('90%'),
    justifyContent: 'center',
    borderTopColor: colors.black,
    borderTopWidth: 4,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1%'),
    // backgroundColor: 'yellow',
  },
  totalfixamount: {
    fontSize: 16,
    color: colors.gray,
  },
  finalprice: {
    fontSize: 18,
    color: colors.black,
  },
  flatlistcontainer: {
    // height: hp('20%'),
  },
  submit: {
    flex: 1,
  },
  button: {
    // marginTop:hp('1%')   //add
  },
  Quantity: {
    fontSize: 14,
    color: colors.black,
  },
  //   cut: {
  //     alignSelf: 'flex-end',
  //     bottom: hp('9.5%'),
  //   },
  billing: {
    borderBottomWidth: 3,
    borderBottomColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  billingtxt: {
    paddingBottom: hp('3%'),
  },
  txtstyle: {
    fontSize: wp('5'),
    color: colors.gray,
    marginTop: hp('1%'),
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Regular',
  },
  txtstyle1: {
    fontSize: wp('5'),
    color: colors.black,
    marginTop: hp('1%'),
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-SemiBold',
  },
  txtstyleprice: {
    fontSize: 16,
    color: colors.gray,
    marginTop: hp('1%'),
    alignSelf: 'flex-end',
  },
  totalamt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shippingmethod: {
    fontSize: 18,
    color: colors.black,
    marginTop: hp('4%'),
    alignSelf: 'flex-start',
  },
  formInputfield: {
    marginTop: hp('1.5%'),
  },
  addressView: {
    width: wp('90'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: wp('4.5'),
    // marginLeft: 20,
    marginTop: hp('5'),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
});

export default MyCart;
