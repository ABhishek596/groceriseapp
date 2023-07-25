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

const Freshpickup = () => {
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
    {
      id: '5',
      isNew: true,
      imageUrl: require('../../../assets/images/DelightNuts.png'),
      category: 'staples',
      title: 'Delight Nuts Raw Seeds Pumpkin',
      weight: '1 Kg',
      price: '$85.00',
      liked: false,
    },
    {
      id: '6',
      isNew: true,
      imageUrl: require('../../../assets/images/DelightNuts.png'),
      category: 'staples',
      title: 'Delight Nuts Raw Seeds Pumpkin',
      weight: '1 Kg',
      price: '$85.00',
      liked: false,
    },
    {
      id: '7',
      isNew: true,
      imageUrl: require('../../../assets/images/DelightNuts.png'),
      category: 'staples',
      title: 'Delight Nuts Raw Seeds Pumpkin',
      weight: '1 Kg',
      price: '$85.00',
      liked: false,
    },
    {
      id: '8',
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

  const renderItem = ({item}) => (
    <View style={styles.box} key={item.id}>
      <View style={styles.inner}>
        <View style={styles.rowContainer}>
          {item.isNew && <Text style={styles.newText}>NEW</Text>}
          <Pressable
            style={styles.heartstyle}
            onPress={() => handleLike(item.id)}>
            <Icons
              iconType={'MaterialCommunityIcons'}
              name={item.liked ? 'heart' : 'cards-heart-outline'}
              size={18}
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
              size={18}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        // numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FAFAFA',
  },
  listContainer: {
    // paddingHorizontal: wp('0%'),
    // paddingTop: hp('2%'),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  box: {
    width: wp('40%'),
    height: hp('26%'),
    // padding: wp('1'),
    borderRadius: 8,
    margin: wp('2.2%'),
  },
  inner: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  newText: {
    fontSize: wp(2),
    backgroundColor: '#FCE9C8',
    width: wp('10%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopRightRadius: wp(2),
    borderBottomRightRadius: wp(2),
    marginTop: 10,
  },
  image: {
    height: hp('10.6%'),
    width: wp('25%'),
    alignSelf: 'center',
  },
  categoryContainer: {
    marginTop: hp('1%'),
    marginLeft: wp('1%'),
  },
  categoryText: {
    paddingHorizontal: wp('1.5%'),
    backgroundColor: colors.gray,
    borderRadius: wp('2%'),
    fontSize: wp('2.1%'),
    fontWeight: '500',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  titleContainer: {
    marginLeft: 5,
    width: wp('35%'),
    height: hp('3.7%'),
  },
  titleText: {
    fontSize: 8,
    fontWeight: '700',
    color: 'black',
  },
  weightText: {
    fontSize: 7,
    fontWeight: '700',
    marginTop: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    height: hp('2.6%'),
    backgroundColor: '#FFFFFF',
    marginTop: hp('2.9'),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 10,
    fontWeight: '700',
    alignSelf: 'center',
    marginHorizontal: 10,
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
});

export default Freshpickup;
