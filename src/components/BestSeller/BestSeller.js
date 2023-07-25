import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../colors';
import Icons from '../icons/Icons';

const BestSeller = () => {
  const [data, setData] = useState([
    {
      id: '1',
      isNew: true,
      imageUrl: require('../../../assets/images/gobi.png'),
      category: 'Fruits & Vegetables',
      title: 'Delight Nuts Raw Seeds Pumpkin',
      weight: '1 Kg',
      price: '$85.00',
      liked: false,
    },
    {
      id: '2',
      isNew: true,
      imageUrl: require('../../../assets/images/DelightNuts.png'),
      category: 'staples',
      title: 'Delight Nuts Raw Seeds Pumpkin',
      weight: '1 Kg',
      price: '$85.00',
      liked: false,
    },
    {
      id: '3',
      isNew: true,
      imageUrl: require('../../../assets/images/gobi.png'),
      category: 'Fruits & Vegetables',
      title: 'Delight Nuts Raw Seeds Pumpkin',
      weight: '1 Kg',
      price: '$85.00',
      liked: false,
    },
    {
      id: '4',
      isNew: true,
      imageUrl: require('../../../assets/images/DelightNuts.png'),
      category: 'staples',
      title: 'Delight Nuts Raw Seeds Pumpkin',
      weight: '1 Kg',
      price: '$85.00',
      liked: false,
    },
    // Add more items to the data array
  ]);

  const handleLike = itemId => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId ? {...item, liked: !item.liked} : item,
      ),
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <View style={styles.inner}>
          <View style={styles.rowContainer}>
            {item.isNew && <Text style={styles.newText}>NEW</Text>}
            <Pressable
              style={styles.heartstyle}
              onPress={() => handleLike(item.id)}>
              <Icons
                iconType={'MaterialCommunityIcons'}
                name={item.liked ? 'heart' : 'cards-heart-outline'}
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
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.weightText}>{item.weight}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{item.price}</Text>
            <TouchableOpacity style={styles.iconStyle}>
              <Icons
                name={'camerao'}
                iconType={'AntDesign'}
                size={wp('4%')}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryview}>
        <Text style={styles.itemview}>Best Seller</Text>
        <Text style={styles.viewAll}>view All</Text>
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
        />
      ) : (
        <Text style={styles.noDataText}>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FAFAFA',
  },
  contentContainer: {
    alignSelf: 'center',
    // paddingBottom: hp('1%'),
  },
  itemview: {
    fontSize: wp('4%'),
    fontFamily: 'Poppins-BoldItalic',
    color: 'black',
  },
  viewAll: {
    fontSize: wp('3%'),
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: 'black',
  },
  categoryview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: hp('1%'),
    marginHorizontal: wp('2%'),
    alignItems: 'center',
    // marginTop: hp('0%'),
  },
  box: {
    width: wp('45%'),
    height: hp('32%'),
    // padding: wp('0.1%'),
    borderRadius: wp('2%'),
    margin: wp('2.2%'),
    // backgroundColor:'red',
  },
  inner: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: hp('0.2%'),
    },
    shadowOpacity: 0.25,
    shadowRadius: wp('1%'),
    elevation: 2,
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
    marginTop: hp('1%'),
    marginLeft: wp('1%'),
  },
  categoryText: {
    paddingHorizontal: wp('2.5%'),
    backgroundColor: colors.gray,
    borderRadius: wp('2%'),
    fontSize: wp('2.1%'),
    fontWeight: '500',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  titleContainer: {
    marginLeft: wp('2%'),
    // width: wp('35%'),
    // height: hp('3.7%'),
  },
  titleText: {
    fontSize: wp('3.1%'),
    fontWeight: '700',
    color: 'black',
  },
  weightText: {
    fontSize: wp('2.2%'),
    fontWeight: '700',
    marginTop: hp('0.3%'),
  },
  priceContainer: {
    flexDirection: 'row',
    height: hp('3.5%'),
    backgroundColor: '#FFFFFF',
    marginTop: hp('2.3%'),
    borderBottomLeftRadius: wp('2%'),
    borderBottomRightRadius: wp('2%'),
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: wp('2.5%'),
    fontWeight: '700',
    alignSelf: 'center',
    marginHorizontal: wp('2%'),
  },
  iconStyle: {
    backgroundColor: colors.themePrimary,
    height: hp('5%'),
    width: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('3%'),
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
});

export default BestSeller;
