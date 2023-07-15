import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../colors';

const carBrands = [
  {
    id: 1,
    name: 'Vegatable',
    img: require('../../../assets/images/grosry.png'),
    page: 'HomeCategories',
  },
  {
    id: 2,
    name: 'Meat',
    //   img: require('../../../assets/images/imgk.jpeg'),
    page: 'CategoriesScreen',
  },
  {
    id: 3,
    name: 'Bread',
    //   img: require('../../../assets/images/Apple.jpg'),
    page: '',
  },
  {
    id: 4,
    name: 'Fruit',
    //   img: require('../../../assets/images/imgk.jpeg'),
    page: '',
  },
  {
    id: 5,
    name: 'Customize',
    //   img: require('../../../assets/images/imgv.jpeg'),
    page: '',
  },
  {
    id: 6,
    name: 'Couple Match',
    // //   img: require('../../../assets/images/imgk.jpeg'),
    page: '',
  },
  {
    id: 7,
    name: 'Accessories',
    //   img: require('../../../assets/images/pexels.webp'),
    page: '',
  },
  {
    id: 8,
    name: 'Brand',
    //   img: require('../../../assets/images/sav.jpeg'),
    page: '',
  },
  {
    id: 9,
    name: 'Clothing',
    // //   img: require('../../../assets/images/imgk.jpeg'),
    page: '',
  },
  {
    id: 10,
    name: 'Shoes',
    //   img: require('../../../assets/images/pexels.webp'),
    page: '',
  },
];

const FlatListExample = ({onTouch}) => {
  const [selectedItem, setSelectedItem] = useState();

  const ItemView = ({item}) => {
    const backgroundColor =
      item.id === selectedItem ? '#000000' : '#808080' + 60;
    // const color = item.id === selectedItem ? '#fff' : '#000000';
    // const translateYImage = new Animated.Value(40);
    return (
      <View>
        <View style={[styles.cardContainer, {backgroundColor}]}>
          {/* <Image
                // source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                source={carBrands.img}
                style={styles.cardContainer}
                
              /> */}
          <TouchableOpacity
            onPress={() => {
              setSelectedItem(item.id);
              onTouch(item.page);
            }}>
            <Animated.Image
              source={item.img}
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', top: 2}}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    );
  };

  // const ontouch = () => navigation.navigate(item.page);
  return (
    <FlatList
      data={carBrands}
      renderItem={ItemView}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#808080' + 60,
    width: 55,
    height: 55,
    borderRadius: 75,
    justifyContent: 'center',
    // marginVertical: 8,
    marginHorizontal: wp('3'),
    alignItems: 'center',
    // padding: 20,
  },
  name: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    fontFamily: 'Merriweather-BlackItalic',
    color: colors.black,
    fontSize: hp('1.5%'),
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 75,
    color: colors.black,
    borderwith: 1,
    backgroundColor: '#808080' + 60,
  },
});

export default FlatListExample;
