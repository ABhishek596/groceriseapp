import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../colors';
import fontFamily from '../../utils/FontFamily';
import {moderateScale, scale} from '../../utils/responsiveSize';
import Icons from '../icons/Icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = ({onPress, headerStyle, headertext, bell, back, close}) => {
  // const moveToScreen = Screen => () => {
  //   navigation.navigate(Screen);
  // };
  const navigation = useNavigation();
  return (
    <View style={{...styles.headerStyle, ...headerStyle, ...Icons}}>
      <View style={styles.mainheader}>
        {back && (
          <TouchableOpacity
            onPress={onPress ? onPress : () => navigation.goBack()}>
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
          // onPress={!!onPress ? onPress : () => navigation.goBack()}
          >
            <Icons
              name={'close'}
              iconType={'AntDesign'}
              size={25}
              color={'#ffffff'}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.text}>{headertext}</Text>

        <View style={styles.iconstyle}>
          {bell && (
            <TouchableOpacity
            // onPress={moveToScreen(navigationStrings.NOTIFICATION)}
            >
              <Icons
                name={'camerao'}
                iconType={'AntDesign'}
                size={18}
                color={colors.black}
              />
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
    padding: scale(18),
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
});

export default Header;
