import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const GrabGone = () => {
  const data = [
    {
      id: '1',
      name: 'Toilet & Floor Cleaner',
      discount: 'Flat 25% off',
      imageUrl: require('../../../assets/images/toilet_floor_cleaner.png'),
    },
    {
      id: '2',
      name: 'Toothbrush',
      discount: 'Flat 32% off',
      imageUrl: require('../../../assets/images/toothbrush.png'),
    },
    {
      id: '3',
      name: 'Body Wash',
      discount: 'Flat 25% off',
      imageUrl: require('../../../assets/images/body_wash.png'),
    },
    {
      id: '4',
      name: 'Wheat Atta',
      discount: 'Flat 25% off',
      imageUrl: require('../../../assets/images/wheat_atta.png'),
    },
    // Add more items here
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.imageUrl} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
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
    backgroundColor: '#FAFAFA',
    paddingVertical: hp('2%'),
  },
  screenName: {
    fontSize: wp('5%'),
    fontFamily: 'Poppins-BoldItalic',
    color: 'black',
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: wp('2%'),
  },
  itemContainer: {
    width: wp('40%'),
    marginHorizontal: wp('1%'),
    backgroundColor: '#F5F5F5',
    borderRadius: wp('2%'),
    alignItems: 'center',
    paddingVertical: hp('2%'),
  },
  image: {
    width: wp('25%'),
    height: wp('25%'),
    resizeMode: 'contain',
  },
  name: {
    fontSize: wp('4%'),
    fontWeight: '700',
    marginTop: hp('1%'),
  },
  discount: {
    fontSize: wp('3%'),
    fontWeight: '500',
    color: 'red',
    marginTop: hp('1%'),
  },
});

export default GrabGone;
