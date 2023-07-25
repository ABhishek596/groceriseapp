/* eslint-disable react-native/no-inline-styles */
// import liraries
import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import Header from '../../components/Header/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {JsonData} from '../../components/data/JsonData';

// create a component
const Category = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <View style={styles.inner}>
          {item.image && (
            <Image
              resizeMode="center"
              style={{
                height: hp('25.5'),
                width: wp('41.3'),
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: hp('1'),
              }}
              source={item.image}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header back headertext="Categories" bell />
      <FlatList
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
    width: wp('47%'),
    height: hp('28%'),
    padding: hp('1.5'),
    borderRadius: 8,
    marginBottom: 10,
    // elevation:15,
    // backgroundColor:'green'
  },
  inner: {
    flex: 1,
    backgroundColor: 'pink',
    borderRadius: 8,
    justifyContent: 'center',
  },
});

// make this component available to the app
export default Category;
