import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Icons from '../../components/icons/Icons';
import {HeaderScreen1} from '../../components/file';
import {
  SubmitBtn1,
  FormInputField,
  FormMaxInputField,
} from '../../components/file';
import Icons from '../../components/icons/Icons';
import Flatlist from '../../components/flatlist/FlatList';

const ComponentsScreen = ({navigation}) => {

    const onTouch = page => {
        // Do something with the page value, e.g., navigate to another screen
        // using the page value
        // navigation.navigate(page);
      //  navigation.navigate('BottomNevigator', { screen: page }) ||  navigation.navigate('HomeNavigator', { screen: page }) 
      };
      
  return (
    <View style={styles.container}>
      <HeaderScreen1 iconTypeLeft={'AntDesign'} nameLeft={'arrowleft'} />
      <View style={{marginTop: hp('2%')}}>
        <Flatlist onTouch={onTouch} />
      </View>
      <View style={{height: hp('5')}}></View>
      <View style={styles.squre}>
        <ImageBackground
          source={require('../../../assets/images/download111.jpeg')}
          //  resizeMode="cover"
          style={styles.image}
          imageStyle={{borderRadius: wp('8')}}>
          <Text style={styles.cadrtoptxt}>Fresh Pomegra</Text>
          <Text style={styles.cadrbottomprice}>Dairy & Bakery</Text>
          <Text style={styles.cadrbottomrating}>750G</Text>
          <View style={styles.bottomrow}>
            <SubmitBtn1
              style={{borderColor: '#fff', width: wp('45'), height: hp('6')}}
              label={'add to cart'}
              txtStyle={{color: '#000000'}}
            />
            <View style={styles.round}>
              <Icons
                iconType={'AntDesign'}
                name={'message1'}
                size={16}
                color={'#fff'}
              />
            </View>
            <View style={styles.round}>
              <Icons
                iconType={'AntDesign'}
                name={'hearto'}
                size={16}
                color={'#fff'}
              />
            </View>
          </View>
        </ImageBackground>
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
    width: wp('80'),
    height: hp('45'),
    backgroundColor: '#000000',
    borderRadius: wp('8'),
    alignSelf: 'center',
  },
  image: {
    width: wp('80'),
    height: hp('45'),
  },
  cadrtoptxt: {
    color: '#fff',
    fontSize: wp('6'),
    marginLeft: wp('5'),
    marginTop: hp('4'),
    fontFamily: 'Poppins-SemiBold',
  },
  cadrbottomprice: {
    color: '#fff',
    fontSize: wp('4'),
    marginLeft: wp('5'),
    marginTop: hp('18'),
    fontFamily: 'Poppins-SemiBold',
  },
  cadrbottomrating: {
    color: '#fff',
    fontSize: wp('4'),
    marginLeft: wp('5'),
    // marginTop:hp('4'),
    fontFamily: 'Poppins-Regular',
  },
  bottomrow: {
    flexDirection: 'row',
    width: wp('72'),
    alignSelf: 'center',
    top: hp('1.5'),
    alignItems: 'center',
  },

  round: {
    width: hp('6'),
    height: hp('6'),
    backgroundColor: '#C0C0C0' + 50,
    borderRadius: 180 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('3'),
  },
});

export default ComponentsScreen;
