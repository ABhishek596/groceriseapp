import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../utils/Colors';
import fontFamily from '../../utils/FontFamily';
import {moderateScale, scale} from '../../utils/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';
import Icons from '../icons/Icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';
import { useSelector } from 'react-redux';

const Header = ({onPress, headerStyle, headertext, cart, back, close,search}) => {
  const cartItems = useSelector(state => state.cart);
  console.log('addded products in cart', cartItems);
  const moveToScreen = (Navigator,Screen) => () => {
    navigation.navigate(Navigator, { screen: Screen });
  };
  const navigation = useNavigation();
  return (
    <View style={{...styles.headerStyle, ...headerStyle, ...Icons}}>
      <View style={styles.mainheader}>
        {back && (
          <TouchableOpacity
            onPress={!!onPress ? onPress : () => navigation.goBack()}>
            <View style={styles.backButton}>
              <Icons
                name={'angle-left'}
                iconType={'FontAwesome'}
                size={25}
                color={colors.black}
              />
            </View>
          </TouchableOpacity>
        )}
        {close && (
          <TouchableOpacity
          style={{width:wp('5')}}
          // onPress={!!onPress ? onPress : () => navigation.goBack()}
          >
            {/* <Icons
              name={'close'}
              iconType={'AntDesign'}
              size={25}
              color={'#F4F4F6'}
            /> */}
          </TouchableOpacity>
        )}
        <Text style={styles.text}>{headertext}</Text>
        {search && (
          <TouchableOpacity
          onPress={moveToScreen(navigationStrings.STACK,navigationStrings.SEARCH)}
          >
            <Icons
              name={'search1'}
              iconType={'AntDesign'}
              size={25}
              color={'black'}
            />
          </TouchableOpacity>
        )}
        <View style={styles.iconstyle}>
          {cart && (
            <TouchableOpacity
              onPress={moveToScreen(navigationStrings.STACK,navigationStrings.SHOPPINGCART)}>
              <Image
                resizeMode="contain"
                style={{
                  height: hp('5'),
                  width: wp('7'),
                  alignSelf: 'center',
                  tintColor: Colors.black,
                }}
                source={require('../../../assets/images/bags-shopping.png')}
              />
              {cartItems.length > 0 && (
              <View style={styles.additem}>
                <Text
                  style={{
                    color: Colors.white,
                    justifyContent: 'center',
                    fontSize: wp('1.5'),
                    fontWeight: '800',
                  }}>
                  {`${cartItems.length}`}
                </Text>
              </View>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    minHeight: moderateScale(48),
    // backgroundColor:'#FFFFFF',
  },
  mainheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(9),
    marginVertical: hp('0.8'),
    // marginHorizontal:wp('0.2'),
    // backgroundColor: 'red',
    // height:'100%',
    // width:'100%'
    // borderBottomWidth:1,
    borderBottomColor: '#EDEDED',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fontFamily.semibold,
    fontWeight: '700',
    color: colors.black,
    textTransform: 'capitalize',
    // backgroundColor: 'green',
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
  backButton: {
    backgroundColor: '#FFFFFF',
    height: hp('5%'),
    width: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  additem: {
    height: hp('2'),
    width: wp('4'),
    backgroundColor: Colors.themePrimary,
    borderRadius: hp('1.2'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: hp('0.5'),
    left: wp('3.5'),
  },
});

export default Header;


// import React from 'react'
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { Badge, Surface, Title } from 'react-native-paper'
// import Feather from 'react-native-vector-icons/Feather'
// import Colors from '../constants/Colors';

// const IconSize = 24;

// const Header = ({ style, menu, back, title, right, onRightPress, optionalBtn, optionalBtnPress, rightComponent, headerBg, iconColor, titleAlight, optionalBadge }) => {

// 	const LeftView = () => (
// 		<View style={styles.view}>
// 			{menu && <TouchableOpacity onPress={() => { }}>
// 				<Feather name="menu" size={IconSize} color={iconColor} />
// 			</TouchableOpacity>}
// 			{back && <TouchableOpacity onPress={() => { }}>
// 				<Feather name="arrow-left" size={IconSize} color={iconColor} />
// 			</TouchableOpacity>}
// 		</View>
// 	)
// 	const RightView = () => (
// 		rightComponent ? rightComponent :
// 			<View style={[styles.view, styles.rightView]}>
// 				{optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
// 					<Feather name={optionalBtn} size={IconSize} color={iconColor} />
// 					{optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
// 				</TouchableOpacity>}
// 				{right && <TouchableOpacity onPress={onRightPress}>
// 					<Feather name={right} size={IconSize} color={iconColor} />
// 				</TouchableOpacity>}
// 			</View>
// 	)
// 	const TitleView = () => (
// 		<View style={styles.titleView}>
// 			<Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
// 		</View>
// 	)
// 	return (
// 		<Surface style={[styles.header, style, { backgroundColor: headerBg }]}>
// 			<LeftView />
// 			<TitleView />
// 			<RightView />
// 		</Surface>
// 	)
// }

// export default Header

// const styles = StyleSheet.create({
// 	header: {
// 		height: 50,
// 		elevation: 8,
// 		justifyContent: 'space-between',
// 		alignItems: 'center',
// 		flexDirection: 'row',
// 		backgroundColor: Colors.black,
// 	},
// 	view: {
// 		marginHorizontal: 16,
// 		alignItems: 'center',
// 		flexDirection: 'row',
// 	},
// 	titleView: {
// 		flex: 1,
// 	},
// 	rightView: {
// 		justifyContent: 'flex-end',
// 	},
// 	rowView: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		marginRight: 10,
// 	}
// })