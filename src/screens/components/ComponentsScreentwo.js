import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Icons from '../../components/icons/Icons';
import Icons from '../../components/icons/Icons';
import Flatlist from '../../components/FlatList';
const ComponentsScreen = ({navigation}) => {
  const onTouch = page => {
    // Do something with the page value, e.g., navigate to another screen
    // using the page value
    // navigation.navigate(page);
    //  navigation.navigate('BottomNevigator', { screen: page }) ||  navigation.navigate('HomeNavigator', { screen: page })
  };
  return (
    <View style={styles.container}>
      <View style={{height: hp('5')}} />
      <View style={{marginTop: hp('2%')}}>
        <Flatlist onTouch={onTouch} />
      </View>
      <View style={{height: hp('5')}} />

      <View style={styles.squre}>
        <Text style={styles.cadrtoptxt}>Fresh Pomegra</Text>
        <Text style={styles.cadrbottomprice}>$ 98.00</Text>
        <Image
          source={require('../../../assets/images/wepik.png')}
          resizeMode="center"
          style={styles.image}
        />
        <View style={styles.bottomrow}>
          <View>
            <Text style={styles.cadrbottomrating}>India Gate Mogra</Text>
            <Text style={styles.cadrbottomrating1}>750G</Text>
          </View>

          <View style={styles.round}>
            <Icons
              iconType={'SimpleLineIcons'}
              name={'handbag'}
              size={18}
              color={'#000000'}
              onPress={() => navigation.navigate('ComponentsScreenthree')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  squre: {
    width: wp('65'),
    height: hp('45'),
    backgroundColor: '#F8F8F8',
    borderRadius: wp('6'),
    alignSelf: 'center',
  },
  image: {
    width: wp('35'),
    height: wp('35'),
    alignSelf: 'center',
    marginTop: hp('2'),
    backgroundColor: '#F0F0F0',
  },
  cadrtoptxt: {
    color: '#000000',
    fontSize: wp('5'),
    marginTop: hp('2'),
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
  },
  cadrbottomprice: {
    color: '#000000',
    fontSize: wp('4'),
    alignSelf: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  cadrbottomrating: {
    color: '#000000',
    fontSize: wp('4'),
    // marginLeft: wp('5'),
    marginTop: hp('2'),
    fontFamily: 'Poppins-Regular',
  },
  cadrbottomrating1: {
    color: '#808080',
    fontSize: wp('4'),
    // marginLeft: wp('5'),
    // marginTop:hp('4'),
    fontFamily: 'Poppins-Regular',
  },
  bottomrow: {
    flexDirection: 'row',
    width: wp('60'),
    alignSelf: 'center',
    top: hp('1.5'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  round: {
    width: hp('6'),
    height: hp('6'),
    backgroundColor: '#fff',
    borderRadius: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('3'),
    marginTop: hp('2'),
  },
});

export default ComponentsScreen;
