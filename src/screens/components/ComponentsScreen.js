import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
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
  Mytxt,
} from '../../components/file';
import Icons from '../../components/icons/Icons';
import Flatlist from '../../components/flatlist/FlatList';
import colors from '../../components/colors';

const ComponentsScreen = ({navigation}) => {
  const onTouch = page => {
    // Do something with the page value, e.g., navigate to another screen
    // using the page value
    // navigation.navigate(page);
    //  navigation.navigate('BottomNevigator', { screen: page }) ||  navigation.navigate('HomeNavigator', { screen: page })
  };

  return (
    <View style={styles.container}>
      {/* <HeaderScreen1 iconTypeLeft={'AntDesign'} nameLeft={'arrowleft'} /> */}
      {/* <View style={{marginTop: hp('2%')}}>
        <Flatlist onTouch={onTouch} />
      </View> */}
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

      <View style={{height: hp('10')}}></View>

      {/* <View style={styles.listitem}>
        <View style={styles.txtimage}>
          <View>
            <ImageBackground
              style={styles.imagecontain}
              source={require('../../../assets/images/download111.jpeg')}
              resizeMode="cover"
              imageStyle={{borderRadius: wp('4')}}
              // source={{uri}}
            >
              <View style={styles.cross}></View>
            </ImageBackground>
          </View>

          <View style={styles.txtcontainer}>
            <Mytxt style={styles.toptxt} txt={'India Gate Basmati'} />
            <Mytxt style={styles.middletxt} txt={'$435.00'} />
            <Mytxt style={styles.bottomtxt} txt={'750G'} />

            <View style={styles.activity}>
              <Pressable
              // onPress={() => {
              //   if (item.qty > 1) {
              //     dispatch(reduceItemFromCart(item));
              //   } else {
              //     dispatch(removeItemFromCart(index));
              //   }
              // }}
              >
                <View style={styles.minus}>
                  <Icons
                    name={'minus'}
                    iconType={'AntDesign'}
                    size={14}
                    color={colors.black}
                  />
                </View>
              </Pressable>
              <View style={styles.value}>
                <Mytxt style={styles.increse1} txt={'4'} />
              </View>
              <Pressable
              // onPress={() => {
              //   dispatch(addItemToCart(item));
              // }}
              >
                <View style={styles.plus}>
                  <Icons
                    name={'plus'}
                    iconType={'AntDesign'}
                    size={14}
                    color={colors.black}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.cut}>
            <Icons
              name={'close'}
              iconType={'EvilIcons'}
              size={25}
              color={colors.gray}
              // onPress={() => {
              //   dispatch(removeItemFromCart(index));
              // }}
            />
          </View>
        </View>
      </View> */}
      <View style={styles.titleBar}>
        <Image
          style={styles.userImage}
          source={require('../../../assets/images/download111.jpeg')}
        />
        <View style={styles.userInfo}>
          <View style={styles.address}>
            <Text style={styles.userName}>Lucy Martin</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Icons
                name="location-pin"
                iconType="Entypo"
                size={12}
                color={colors.themePrimary}
                style={{marginLeft: wp('-0.8'), bottom: hp('0.2')}}
              />
              <Text style={styles.addressText}>Mithakhali, Navrangpura</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Icons
            name="camerao"
            iconType="AntDesign"
            size={18}
            color={colors.black}
          />
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
  listitem: {
    height: hp('20%'),
    width: wp('90%'),
    // borderTopColor: colors.inputBorderColor,
    // borderTopWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  txtimage: {
    flexDirection: 'row',
  },
  imagecontain: {
    height: hp('20%'),
    width: wp('35%'),
  },
  txtcontainer: {
    marginLeft: wp('5%'),
  },
  toptxt: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  middletxt: {
    alignSelf: 'flex-start',
    color: colors.black,
    fontSize: 14,
    marginTop: hp('0.5%'),
  },
  bottomtxt: {
    color: colors.gray,
    alignSelf: 'flex-start',
    fontSize: 12,
    marginTop: hp('0.5%'),
  },
  cut: {
    alignSelf: 'flex-end',
    top: hp('7'),
    // bottom: hp('9.5%'),
  },
  minus: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 180 / 2,
    height: hp('4%'),
    width: hp('4%'),
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  plus: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 180 / 2,
    height: hp('4%'),
    width: hp('4%'),
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  // increse:{
  //   color:colors.black,
  // },
  increse1: {
    color: colors.black,
    marginHorizontal: wp('5'),
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    top: hp('5'),
  },

  //header
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('7%'),
    width: wp('95'),
    // backgroundColor: 'yellow',
    alignSelf: 'center',
  },
  userImage: {
    width: wp('9'),
    height: wp('9'),
    borderRadius: 180 / 2,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp('2'),
    alignItems: 'center',
    width: wp('76.5'),
  },
  userName: {
    color: colors.black,
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: wp('4'),
    fontFamily: 'Poppins-SemiBold',
  },
  address: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  addressText: {
    color: colors.black,
    fontSize: wp('2.6'),
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    padding: wp('1.2'),
    backgroundColor: colors.white,
    borderRadius: wp('2'),
    top: hp('0.1'),
  },
});

export default ComponentsScreen;
