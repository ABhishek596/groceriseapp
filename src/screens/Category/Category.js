// import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {JsonData} from '../../components/data/JsonData';
import {useNavigation} from '@react-navigation/native';

// create a component
const Category = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  const handleCategoryPress = categoryData => {
    // Handle category press
    // Navigate to the category details screen passing the categoryId
    navigation.navigate('Produts', {categoryData});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => handleCategoryPress(item)}>
        <View style={styles.inner}>
          {item.image && (
            <Image
              resizeMode="center"
              style={{
                height: hp('28'),
                width: wp('45'),
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: hp('1'),
              }}
              source={item.image}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header back headertext="Categories" cart />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={JsonData.categoriesList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.boxContainer}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    // padding: 10,
    alignSelf: 'center',
    paddingBottom: hp('10'),
    // elevation:2
    // backgroundColor:'red'
  },
  box: {
    width: wp('45%'),
    height: hp('28%'),
    // padding: hp('1.5'),
    marginVertical: hp('1.2'),
    marginHorizontal: wp('2.5'),
    borderRadius: hp('1.2'),
    // marginBottom: 10,
    // elevation:15,
    // backgroundColor:'green'
  },
  inner: {
    flex: 1,
    backgroundColor: 'pink',
    borderRadius: hp('1'),
    justifyContent: 'center',
  },
});

// make this component available to the app
export default Category;
