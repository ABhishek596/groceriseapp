//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/searchbar/SearchBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from '../../components/icons/Icons';
import Colors from '../../utils/Colors';
import {JsonData} from '../../components/data/JsonData';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProducts,
  decreaseQty,
  increaseQty,
  removeItemFromProducts,
} from '../../redux/slices/ProductsSlice';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../../redux/slices/CartSlice';
import {height} from '../../utils/responsiveSize';

// create a component
const Produts = ({route, productData}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {categoryData} = route.params;
  const products = JsonData.productData[categoryData.category] || [];
  const subCategories = JsonData.subCategories[categoryData.category];

  const [data, setData] = useState(products);
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  console.log('datattt', data);
  useEffect(() => {
    dispatch(addProducts(data));
  }, [data]);
  const myProducts = useSelector(state => state.products);
  console.log('Products:.....', myProducts);
  const categoryWiseData = myProducts[categoryData.category];
  console.log('Category-wise data:', categoryWiseData);
  const cartItems = useSelector(state => state.cart);
  console.log('addded products in cart', cartItems);
  // const dispatch = useDispatch();
  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  const updateProductQuantities = () => {
    const newData = products.map(item => {
      const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
      if (cartItem) {
        return {...item, qty: cartItem.qty};
      }
      return item;
    });
    setData(newData);
  };
  useEffect(() => {
    updateProductQuantities();
  }, [cartItems]);

  const handleIncreaseQty = productId => {
    dispatch(increaseQty(productId));
  };
  const handleDecreaseQty = productId => {
    dispatch(decreaseQty(productId));
  };

  // function handleIncreaseQty(itemId) {
  //   setData(prevData =>
  //     prevData.map(item =>
  //       item.id === itemId ? {...item, qty: item.qty + 1} : item,
  //     ),
  //   );
  // }

  // const handleDecreaseQty = itemId => {
  //   setData(prevData =>
  //     prevData.map(item =>
  //       item.id === itemId && item.qty > 0
  //         ? {...item, qty: item.qty - 1}
  //         : item,
  //     ),
  //   );
  // };

  const handleSubCategorySelection = subCategory => {
    setSelectedSubCategory(subCategory);
    if (subCategory === 'All') {
      setData(products);
    } else {
      setData(products.filter(item => item.subCategory === subCategory));
    }
  };

  const handleLike = itemId => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId ? {...item, liked: !item.liked} : item,
      ),
    );
  };

  const truncateTitle = (title, limit) => {
    if (title.length > limit) {
      return title.slice(0, limit) + '...';
    }
    return title;
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={()=>navigation.navigate('StackNavigator', {
          screen: 'ProductDetail',
        })}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <View style={styles.rowContainer}>
              {item.isNew && <Text style={styles.newText}>NEW</Text>}
              <Pressable
                style={styles.heartstyle}
                onPress={() => handleLike(item.id)}>
                <Icons
                  iconType={'MaterialIcons'}
                  name={item.liked ? 'favorite' : 'favorite-border'}
                  size={wp('4%')}
                  color={item.liked ? 'red' : 'black'}
                />
              </Pressable>
            </View>

            <Image
              resizeMode="contain"
              style={styles.image}
              source={item.imageUrl}
            />

            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                {truncateTitle(item.title, 40)}
              </Text>
              <Text style={styles.weightText}>{item.weight}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>${item.price}</Text>

              {item.qty == 0 ? (
                <TouchableOpacity
                  style={styles.iconStyles}
                  onPress={() => {
                    console.log('dddddddddddd', item);
                    dispatch(addItemToCart(item));
                    dispatch(increaseQty(item.id));
                    // dispatch(removeItemFromProducts(item.id))
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: hp('5'),
                      width: wp('7'),
                      alignSelf: 'center',
                      tintColor: Colors.white,
                    }}
                    source={require('../../../assets/images/bags-shopping.png')}
                  />
                  {/* <Icons
                  name={'shopping-bag'}
                  iconType={'Fontisto'}
                  size={wp('5%')}
                  color={Colors.white}
                /> */}
                </TouchableOpacity>
              ) : null}
              <View style={styles.iconContainer}>
                {item.qty === 0 ? null : (
                  <TouchableOpacity
                    style={styles.iconStylebtn}
                    onPress={() => {
                      console.log('dddddddddddd', item);
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
                      size={wp('4%')}
                      color={Colors.white}
                    />
                  </TouchableOpacity>
                )}
                {item.qty === 0 ? null : (
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      alignSelf: 'center',
                      color: 'black',
                      marginTop: hp('-3%'),
                      marginRight: wp('1.5'),
                    }}>
                    {item.qty}
                  </Text>
                )}
                {item.qty === 0 ? null : (
                  <TouchableOpacity
                    style={styles.iconStylebtn}
                    onPress={() => {
                      dispatch(addItemToCart(item));
                      handleIncreaseQty(item.id);
                    }}>
                    <Icons
                      name={'plus'}
                      iconType={'Feather'}
                      size={wp('4%')}
                      color={Colors.white}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Header back close headertext={categoryData.category} search cart />
      {/* <View style={styles.searchBarContainer}>
        <View style={{width: '80%', flexDirection: 'row', alignSelf: 'center'}}>
          <SearchBar />
        </View>
        <View style={styles.filterButton}>
          <Image
            style={styles.filterIcon}
            source={require('../../../assets/images/filter.png')}
          />
        </View>
      </View> */}
      <View>
        <View
          style={{
            borderTopWidth: wp(0.2),
            borderTopColor: Colors.black + 40,
            width: wp('100%'),
          }}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}>
          {subCategories.map((subCategory, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSubCategorySelection(subCategory)}
              style={[
                styles.categoryButton,
                {
                  backgroundColor:
                    selectedSubCategory === subCategory
                      ? Colors.themePrimary
                      : Colors.white,
                },
              ]}>
              <Text style={styles.categoryButtonText}>{subCategory}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            borderTopWidth: wp(0.2),
            borderTopColor: Colors.black + 40,
            width: wp('100%'),
          }}
        />
      </View>
      <View>
        {categoryWiseData?.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={categoryWiseData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.contentContainer}
          />
        ) : (
          <Text style={styles.noDataText}>No data available</Text>
        )}
      </View>
      {/* <View
        style={{
          width: wp('100%'),
          height: hp('20%'),
          backgroundColor: Colors.white,
          position: 'absolute',
          bottom: hp('-25%'),
        }}>
        <View
          style={{
            width: wp('30%'),
            justifyContent: 'center',
            alignItems: 'center',
            height: hp('20%'),
          }}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            {'added items' + '(' + cartItems.length + ')'}
          </Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            {'Total:' + getTotal()}
          </Text>
        </View>
      </View> */}
    </View>
  );
};

// define your stylesss
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor:'red'
    // padding: 10,
  },
  filterButton: {
    height: hp(6),
    width: wp(13),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#F9A207',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 2,
  },
  filterIcon: {
    height: hp('3'),
    width: wp('6'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  contentContainer: {
    alignSelf: 'center',
    paddingBottom: hp('60%'),
    // backgroundColor:'yellow',
    // marginTop:90,
    // flex:1,
  },
  box: {
    width: wp('45%'),
    height: hp('31%'),
    borderRadius: wp('1.3%'),
    margin: wp('2.2%'),
    alignSelf: 'center',
    borderWidth: wp('0.1'),
    borderColor: Colors.darkgray,
    // backgroundColor:'red'
  },
  inner: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: wp('2%'),
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: hp('0.2%'),
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: wp('1%'),
    // elevation: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('1'),
  },
  newText: {
    fontSize: wp('2%'),
    backgroundColor: '#FCE9C8',
    width: wp('10%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopRightRadius: wp('2%'),
    borderBottomRightRadius: wp('2%'),
    // marginTop: hp('1%'),
  },
  image: {
    height: hp('14%'),
    width: wp('30%'),
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  categoryContainer: {
    marginTop: hp('1.5%'),
    marginLeft: wp('1%'),
  },
  categoryText: {
    paddingHorizontal: wp('1.2%'),
    marginLeft: wp('1'),
    backgroundColor: Colors.gray,
    borderRadius: wp('2%'),
    fontSize: wp('2.1%'),
    fontWeight: '500',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  titleContainer: {
    marginLeft: wp('2%'),
    marginHorizontal: wp('2%'),
    // width: wp('35%'),
    // height: hp('3.7%'),
  },
  titleText: {
    fontSize: wp('2.8%'),
    fontWeight: '400',
    color: 'black',
  },
  weightText: {
    fontSize: wp('2.2%'),
    fontWeight: '700',
    marginTop: hp('0.5%'),
  },
  priceContainer: {
    flexDirection: 'row',
    height: hp('4%'), // Use heightPercentageToDP for responsive height
    marginTop: 'auto',
    backgroundColor: Colors.white, // Background color for the price container
    borderBottomLeftRadius: wp('1.3%'),
    borderBottomRightRadius: wp('1.3%'),
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: hp('0.2%'),
    },
    shadowOpacity: 0.25,
    shadowRadius: wp('1%'),
    elevation: 5,
  },
  priceText: {
    fontSize: wp('2.5%'),
    fontWeight: '700',
    alignSelf: 'center',
    marginHorizontal: wp('2%'),
  },
  iconStyle: {
    backgroundColor: Colors.themePrimary,
    height: hp('5%'),
    width: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('3%'),
    marginTop: hp('-3%'),
    marginRight: wp('3%'),
    justifyContent: 'center',
  },
  iconStyles: {
    height: hp('5%'),
    width: wp('10%'),
    backgroundColor: Colors.themePrimary,
    marginTop: hp('-3%'),
    borderRadius: hp('3%'),
    alignItems: 'flex-end',
    marginHorizontal: wp('20'),
  },
  iconStylebtn: {
    backgroundColor: Colors.themePrimary,
    height: hp('3%'),
    width: wp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('1%'),
    marginTop: hp('-3%'),
    marginRight: wp('2%'),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('-3%'),
    marginRight: wp('2%'),
  },
  heartstyle: {
    height: hp('2.1%'),
    width: wp('7%'),
    alignSelf: 'flex-end',
  },
  noDataText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: wp('2.5%'),
  },
  categoriesContainer: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  categoryButton: {
    padding: wp('2.6'),
    borderWidth: wp('0.2'),
    margin: wp('1%'),
    color: 'black',
    borderColor: 'black',
    fontSize: 12,
    borderRadius: hp('0.8'),
  },
  activeCategory: {
    borderColor: 'red', // Change this to the desired active category background color
  },
  categoryButtonText: {
    fontSize: 10,
    fontWeight: '500',
    color: 'black',
    marginHorizontal: wp('2'),
    textAlign: 'center',
  },
});

//make this component available to the app
export default Produts;
