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
import colors from './colors';

const carBrands = [
  {
    id: 1,
    name: 'Vegatable',
    img: require('../../assets/images/grosry.png'),
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
    //   img: require('../../../assets/images/imgk.jpeg'),
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
    //   img: require('../../../assets/images/imgk.jpeg'),
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
    const backgroundColor = item.id === selectedItem ? '#30a57b' : '#fff';
    const color = item.id === selectedItem ? '#fff' : '#000000';

    // const cardContainerStyle = [
    //     styles.cardContainer,
    //     selectedItem === item.id && styles.selectedItem,
    //   ];
    // const translateYImage = new Animated.Value(40);   style={styles.cardContainer}
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
            {/* <TouchableOpacity onPress={() => onTouch(item.page)}> */}
            <Animated.Image
              source={item.img}
              resizeMode="center"
              style={styles.image}
            />
            <View style={{alignSelf: 'center', top: hp('1')}}>
              <Text style={[styles.name, {color}]}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // const ontouch = () => navigation.navigate(item.page);  style={styles.name}
  return (
    <FlatList
      data={carBrands}
      renderItem={ItemView}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      extraData={selectedItem}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    //   flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: wp('20'),
    height: hp('14'),
    borderRadius: wp('5'),
    justifyContent: 'center',
    // marginVertical: 8,
    marginHorizontal: wp('3'),
    borderWidth: 1,
    borderColor: '#808080' + 70,
    // backgroundColor: '#30a57b',

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
    width: wp('10'),
    height: hp('6'),
    alignSelf: 'center',
    //   borderRadius: 75,
    //   color: colors.black,
    //   borderwith: 1,
    backgroundColor: '#fff',
  },
});

export default FlatListExample;
