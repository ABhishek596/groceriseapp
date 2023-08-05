import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../utils/Colors';

const GrabGone = () => {
  const data = [
    {
      id: '1',
      name: 'Toilet & Floor Cleaner',
      discount: 'Flat 25% off',
      imageUrl: require('../../../assets/images/toilet_floor_cleaner.png'),
      colors: ['#FFE47A', '#3D7EAA'], // Card 1 colors
    },
    {
      id: '2',
      name: 'Toothbrush',
      discount: 'Flat 32% off',
      imageUrl: require('../../../assets/images/toothbrush.png'),
      colors: ['#ED4264', '#FFEDBC'], // Card 2 colors
    },
    {
      id: '3',
      name: 'Body Wash',
      discount: 'Flat 25% off',
      imageUrl: require('../../../assets/images/body_wash.png'),
      colors: ['#00DBDE', '#0093E9'], // Card 3 colors
    },
    {
      id: '4',
      name: 'Wheat Atta',
      discount: 'Flat 25% off',
      imageUrl: require('../../../assets/images/wheat_atta.png'),
      colors: ['#FBAB7E', '#F7CE68'], // Card 4 colors
    },
    // Add more items here
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <LinearGradient
          colors={item.colors}
          start={{x: 1, y: 0 }}
          end={{x: 0, y: 0}}
          style={styles.gradientContainer}
        />
        <Image resizeMode="cover" source={item.imageUrl} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.discount}>{item.discount}</Text>
        </View>
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
    marginTop: hp('0.5'),
  },
  listContainer: {
    paddingHorizontal: wp('0.6%'),
    paddingVertical: hp('0.5%'),
  },
  itemContainer: {
    width: wp('45%'),
    height: hp('25%'),
    marginHorizontal: wp('1%'),
    backgroundColor: '#F5F5F5',
    borderRadius: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('2%'),
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  image: {
    width: wp('18%'),
    height: wp('40%'),
    resizeMode: 'contain',
    marginRight: wp('2%'),
  },
  gradientContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp('100%'), // Adjust the height to control the gradient size
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: wp('3%'),
    fontWeight: '700',
    color: Colors.black,
  },
  discount: {
    fontSize: wp('4%'),
    fontWeight: '500',
    color: Colors.black,
    marginTop: hp('1%'),
  },
});

export default GrabGone;
