import React from 'react';
import {View, Text, StyleSheet, Image, FlatList,TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {JsonData} from '../../components/data/JsonData';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook


const CategoryData = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  const handleCategoryPress = (categoryData) => {
    // Handle category press
    // Navigate to the category details screen passing the categoryId
    navigation.navigate('Produts', { categoryData });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.box} onPress={() => handleCategoryPress(item)}>
        <View style={styles.inner}>
          {item.image && (
            <Image
              resizeMode='contain'
              style={styles.image}
              source={item.image}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryview}>
        <Text style={styles.itemview}>Category</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={JsonData.categoriesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.boxContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  boxContainer: {
    alignSelf: 'center',
    // paddingBottom: hp('10%'),
  },
  box: {
    width: wp('35%'),
    height: hp('20%'),
    padding: hp('0.8'),
    borderRadius: 8,
    marginBottom: 10,
  },
  inner: {
    flex: 1,
    backgroundColor: 'pink',
    borderRadius: 8,
    justifyContent: 'center',
  },
  itemview: {
    fontSize: 14,
    fontFamily: 'Poppins-BoldItalic',
    color: 'black',
  },
  viewAll: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: 'black',
  },
  categoryview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default CategoryData;
