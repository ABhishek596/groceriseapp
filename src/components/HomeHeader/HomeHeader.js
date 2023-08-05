import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../colors';
import Icons from '../icons/Icons';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';

const HomeHeader = ({ userName, address, cart }) => {
  const moveToScreen = Screen => () => {
    // navigation.navigate(Screen);
    navigation.navigate('StackNavigator', { screen: Screen });
  };
  const navigation = useNavigation();
  return (
    <View style={styles.titleBar}>
      <Image
        style={styles.userImage}
        source={require('../../../assets/images/girl.png')}
      />
      <View style={styles.userInfo}>
        <View style={styles.address}>
          <Text style={styles.userName}>{userName}</Text>
          <View style={styles.addressRow}>
            <Icons
              name="location-pin"
              iconType="Entypo"
              size={hp('2.5%')}
              color={colors.themePrimary}
            />
            <Text style={styles.addressText}>{address}</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconstyle}>
          {cart && (
            <TouchableOpacity
            onPress={moveToScreen(navigationStrings.SHOPPINGCART)}
            >
                  <Image  resizeMode="contain"
                style={{
                  height: hp('5'),
                  width: wp('7'),
                  alignSelf: 'center',
                  tintColor: colors.black,
                }} source={require('../../../assets/images/bags-shopping.png')}/>
              {/* <Icons
                 name={'shopping-bag'}
                 iconType={'Fontisto'}
                size={18}
                color={colors.black}
              /> */}
            </TouchableOpacity>
          )}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
    backgroundColor: colors.white,
  },
  userImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    marginRight: wp('2%'),
  },
  userInfo: {
    flex: 1,
  },
  address: {
    marginBottom: hp('1%'),
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: wp('6'),
  },
  addressText: {
    fontSize: wp('3%'),
    color: colors.gray,
    marginLeft: wp('1%'),
  },
  buttonContainer: {
    padding: wp('2%'),
    backgroundColor: colors.white,
    borderRadius: hp('1%'),
  },
  iconstyle: {
    backgroundColor: '#FFFFFF',
    height: hp('5'),
    width: wp('10'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('1'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

export default HomeHeader;
