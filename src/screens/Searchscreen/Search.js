//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import SearchBar from '../../components/searchbar/SearchBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header/Header';

// create a component
const Search = () => {
  return (
    <View style={styles.container}>
      <Header back headertext="Search Result" cart />
      <View style={styles.searchBarContainer}>
        <View style={{width: '80%', flexDirection: 'row', alignSelf: 'center'}}>
          <SearchBar />
        </View>
        <View style={styles.filterButton}>
          <Image
            style={styles.filterIcon}
            source={require('../../../assets/images/filter.png')}
          />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor:'red'
    padding: 10,
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
});

//make this component available to the app
export default Search;
