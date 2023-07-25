/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
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

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Image
          style={styles.userImage}
          source={require('../../../assets/images/girl.png')}
        />
        <View style={styles.userInfo}>
          <View style={styles.address}>
            <Text style={styles.userName}>Lucy Martin</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Icons
                name="location-pin"
                iconType="Entypo"
                size={15}
                color={colors.themePrimary}
              />
              <Text style={styles.addressText}>Mithakhali, Navrangpura</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Icons
            name="camerao"
            iconType="AntDesign"
            size={15}
            color={colors.black}
          />
        </View>
      </View>
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
      </ScrollView>
    </View>
  );
};

export default Home;
