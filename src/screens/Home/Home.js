/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icons from '../../components/icons/Icons';
import styles from './styles';
import colors from '../../components/colors';
import SearchBar from '../../components/searchbar/SearchBar';
import Carousel from '../../components/Carousel/Carousel';
import Categorydata from '../../components/Categorydata/Categorydata';
import BestSeller from '../../components/BestSeller/BestSeller';
import Offers from '../../components/Offers/Offers';
import Freshpickup from '../../components/Freshpickup/Freshpickup';
import GrabGone from '../../components/GrabGone/GrabGone';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import navigationStrings from '../../constants/navigationStrings';

const Home = ({navigation}) => {
  const moveToScreen = (Navigator, Screen) => () => {
    navigation.navigate(Navigator, {screen: Screen});
  };
  return (
    <View style={styles.container}>
      <HomeHeader
        userName={'Lucy Martin'}
        address={'Mithakhali, Navrangpura'}
        cart
      />
      <View style={styles.searchBarContainer}>
        <TouchableOpacity
          onPress={moveToScreen(
            navigationStrings.STACK,
            navigationStrings.SEARCH,
          )}
          style={{width: '80%', flexDirection: 'row', alignSelf: 'center'}}>
          <SearchBar />
        </TouchableOpacity>
        <View style={styles.filterButton}>
          <Image
            style={styles.filterIcon}
            source={require('../../../assets/images/filter.png')}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bestvalue}>
          <View style={styles.topseller}>
            <Text style={styles.itemview}>Best value</Text>
            <Text style={styles.itemview}>Top Seller</Text>
          </View>
          <View>
            <Text style={styles.viewAll}>view All</Text>
          </View>
        </View>
        <Carousel />
        <Categorydata />
        <BestSeller />
        <Image
          style={styles.banner}
          source={require('../../../assets/images/banner.png')}
        />
        <View style={styles.categoryview}>
          <Text style={styles.itemview}>Shope by offers</Text>
          <Text style={styles.viewAll}>view All</Text>
        </View>
        <Offers />
        <View style={styles.categoryview}>
          <Text style={styles.itemview}>Fresh Pickup</Text>
          <Text style={styles.viewAll}>view All</Text>
        </View>
        <Freshpickup />
        <Freshpickup />
        <Image
          style={styles.banner}
          source={require('../../../assets/images/banner.png')}
        />
        <View style={styles.categoryview}>
          <Text style={styles.itemview}>Grab OR Gone</Text>
          <Text style={styles.viewAll}>view All</Text>
        </View>
        <GrabGone />
        <GrabGone />
      </ScrollView>
    </View>
  );
};

export default Home;
