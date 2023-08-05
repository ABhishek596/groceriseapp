import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Colors from '../../utils/Colors';
import Header from '../../components/Header/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from '../../components/icons/Icons';
import {height} from '../../utils/responsiveSize';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../../redux/slices/CartSlice';
import {decreaseQty, increaseQty} from '../../redux/slices/ProductsSlice';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import navigationStrings from '../../constants/navigationStrings';
import {useNavigation} from '@react-navigation/native';


const Shoppingcart = () => {
  const mycartItems = useSelector(state => state.cart);
  console.log('sakdaksmksd', mycartItems);
  const dispatch = useDispatch();

  const handleIncreaseQty = productId => {
    dispatch(increaseQty(productId));
  };

  const handleDecreaseQty = productId => {
    dispatch(decreaseQty(productId));
  };

  const moveToScreen = Screen => () => {
    navigation.navigate(Screen);
  };

  const handleRemoveFromCart = productId => {
    dispatch(removeItemFromCart(productId));
    dispatch(reduceItemFromCart(productId)); // This will update the products list in the Redux store
  };

  const getTotal = () => {
    let total = 0;
    mycartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  const navigation = useNavigation();

  const renderRightActions = item => {
    return (
      <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
        <View
          style={{
            // flex:1,
            flexDirection: 'row',
            backgroundColor: '#EC3D4A',
            justifyContent: 'center',
            alignItems: 'center',
            width: wp('28'),
            height: hp('15'),
            borderRadius: hp('1.5'),
            marginTop: hp('1'),
            marginHorizontal: wp('3'),
            // padding: 20,
          }}>
          <Icons
            name={'delete'}
            iconType={'AntDesign'}
            size={wp('8%')}
            color={Colors.white}
          />
         
        </View>
      </TouchableOpacity>
    );
  };
  // const [cartItems, setCartItems] = useState([]);

  // const handleQuantityChange = (itemId, action) => {
  //   setCartItems(prevItems => {
  //     const updatedItems = prevItems.map(item => {
  //       if (item.id === itemId) {
  //         return {
  //           ...item,
  //           quantity: action === 'plus' ? item.quantity + 1 : item.quantity - 1,
  //         };
  //       }
  //       return item;
  //     });
  //     return updatedItems;
  //   });
  // };

  const truncateTitle = (title, limit) => {
    if (title.length > limit) {
      return title.slice(0, limit) + '...';
    }
    return title;
  };

  // Individual card component to render each cart item
  const renderCartItem = ({item}) => (
    <Swipeable renderRightActions={() => renderRightActions(item)}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <View style={styles.imgcontainer}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={item.imageUrl}
            />
          </View>
          <View style={styles.tittle}>
            <View style={styles.verticalTextContainer}>
              <Text style={styles.pricetxt}>
                ${item.price} * {item.weight}
              </Text>
              <Text style={styles.pricetittle}>
                {truncateTitle(item.title, 100)}
              </Text>
              <Text style={styles.weighttxt}>{item.weight}</Text>
            </View>
          </View>
          <View style={styles.btnstyle}>
            <View>
              {item.qty == 0 ? null : (
                <TouchableOpacity
                  style={styles.iconStylebtn}
                  // handleQuantityChange(item.id, 'minus')
                  onPress={() => {
                    if (item.qty > 1) {
                      dispatch(reduceItemFromCart(item));
                      handleDecreaseQty(item.id);
                    } else {
                      dispatch(removeItemFromCart(item.id));
                      handleDecreaseQty(item.id);
                    }
                  }}>
                  <Icons
                    name={'minus'}
                    iconType={'Feather'}
                    size={wp('5%')}
                    color={Colors.black}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  backgroundColor: Colors.bgColor1,
                  width: wp('8'),
                  height: hp('4.9'),
                }}>
                <Text style={styles.quantityText}>{item.qty}</Text>
              </View>
              {/* {/ item.quantity /} */}
            </View>
            <View>
              {item.qty == 0 ? null : (
                <TouchableOpacity
                  style={styles.iconStylebtns}
                  // handleQuantityChange(item.id, 'plus')
                  onPress={() => {
                    dispatch(addItemToCart(item));
                    handleIncreaseQty(item.id);
                  }}>
                  <Icons
                    name={'plus'}
                    iconType={'Feather'}
                    size={wp('5%')}
                    color={Colors.black}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <Header back headertext={'Shopping Cart'} cart />
      {mycartItems?.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={mycartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: wp('5%'),
            paddingBottom: hp('2%'),
          }}
        />
      ) : (
        <View
          style={{
            backgroundColor: Colors.white,
            marginHorizontal: wp('4'),
            height: hp('80%'),
            borderRadius: hp('1.5'),
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              resizeMode="cover"
              style={{
                width: wp('35'),
                height: hp('30'),
                alignSelf: 'center',
                tintColor: '#EC3D4A',
              }}
              source={require('../../../assets/images/Empty-bag.png')}
            />
            <Text style={styles.emptytext}>Your Cart is empty!</Text>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.emptytxt}>
                Make Your basket happy and add {'\n'} products to Purchase theme
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.themePrimary,
              alignSelf: 'center',
              justifyContent: 'center',
              height: hp('8%'),
              width: wp('80%'),
              bottom: hp('3'),
              borderRadius: hp('1.5'),
              // paddingVertical: 10,
            }}
            onPress={moveToScreen(navigationStrings.HOME)}>
            <Text
              style={{
                color: 'white',
                fontSize: hp('2.5'),
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: '600',
              }}>
              Start Shopping
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {mycartItems.length > 0 && (
        <View style={styles.pricecontainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: hp('2'),
            }}>
            <View>
              <Text style={styles.pricetittles}>Item</Text>
              <Text style={styles.pricetittles}>sub Total</Text>
              <Text style={styles.pricetittles}>Delivery Charge</Text>
             
            </View>
            <View>
              <Text style={styles.pricetxts}>{`${mycartItems.length}`}</Text>
              <Text style={styles.pricetxts}>${`${getTotal()}`}</Text>
              <Text style={styles.pricetxts}>Free</Text>
           
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: wp('0.1'),
              borderColor: '#ACA8A5',
              width: wp('82%'),
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: hp('2'),
            }}>
            <View>
              <Text style={styles.totaltxt}>Total</Text>
            </View>
            <View>
              <Text style={styles.totaltxt}>${`${getTotal()}`}</Text>
            </View>
          </View>
        </View>
      )}
     {mycartItems.length > 0 && ( <TouchableOpacity
        style={{
          backgroundColor: Colors.themePrimary,
          alignSelf: 'center',
          justifyContent: 'center',
          height: hp('8%'),
          width: wp('90%'),
          bottom: hp('3'),
          borderRadius: hp('1.5'),
          // paddingVertical: 10,
        }}
        onPress={moveToScreen(navigationStrings.DELIVERYADDRESS)}
      >
        <Text
          style={{
            color: 'white',
            fontSize: hp('2.5'),
            textAlign: 'center',
            justifyContent: 'center',
            fontWeight: '600',
          }}>
          Checkout
        </Text>
      </TouchableOpacity>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.themePrimary,
  },
  box: {
    height: hp('15%'),
    width: '100%',
    borderRadius: wp('2'),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    borderWidth: wp('0.2'),
    borderColor: Colors.black + 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    margin: hp('1%'),
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgcontainer: {
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('14'),
    width: wp('32%'),
  },
  img: {
    height: hp('10%'),
    width: wp('20%'),
    //  backgroundColor:'green'
  },
  tittle: {
    width: wp('46%'),
    marginHorizontal: wp('1.5'),
  },
  verticalTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  pricetxt: {
    fontSize: wp('2'),
    fontWeight: '500',
    fontFamily: 'Poppins-BoldItalic',
    color: '#4CCB94',
    shadowColor: '#99E3C0',
  },
  pricetittle: {
    fontSize: wp('2.5'),
    fontWeight: '500',
    fontFamily: 'Poppins-BoldItalic',
    color: Colors.black,
    // backgroundColor:'red',
    alignItems: 'flex-start',
    width: wp('45'),
    // padding:hp('-1')
  },
  weighttxt: {
    fontSize: wp('2'),
    fontWeight: '500',
    fontFamily: 'Poppins-BoldItalic',
    color: Colors.darkgray,
  },
  btnstyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopRightRadius: wp('2'),
    borderBottomRightRadius: wp('2'),
    height: hp('14.7%'),
    backgroundColor: Colors.white,
    // backgroundColor: 'pink',
    paddingHorizontal: wp('1.6'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  quantityText: {
    fontSize: wp('4'),
    fontWeight: 'bold',
    color: Colors.black,
    // backgroundColor: Colors.red,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // paddingHorizontal: wp('1.8'),
  },
  iconStylebtn: {
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: wp('8'),
    height: hp('4.9'),
    alignSelf: 'center',
    alignItems: 'center',
    borderTopRightRadius: wp('2'),
  },
  iconStylebtns: {
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: wp('8'),
    height: hp('4.9'),
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomRightRadius: wp('2'),
  },
  emptytext: {
    fontSize: hp('4'),
    color: Colors.black,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: hp('1.5'),
  },
  emptytxt: {
    fontSize: hp('2'),
    color: Colors.darkgray,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: hp('3ss'),
  },
  pricecontainer: {
    height: hp('22%'),
    width: wp('90%'),
    bottom: hp('5'),
    backgroundColor: Colors.white,
    borderRadius: hp('1'),
    alignSelf: 'center',
  },
  pricetittles: {
    fontSize: hp('2'),
    fontStyle: 'normal',
    fontWeight: '600',
    alignSelf: 'flex-start',
    color: '#ACA8A5',
    fontFamily: 'Poppins-SemiBold',
  },
  pricetxts: {
    fontSize: hp('2'),
    fontStyle: 'normal',
    fontWeight: '600',
    alignSelf: 'flex-end',
    color: '#ACA8A5',
    fontFamily: 'Poppins-SemiBold',
  },
  totaltxt: {
    fontSize: hp('2.2'),
    fontWeight: '700',
    color: Colors.black,
  },
});

export default Shoppingcart;
