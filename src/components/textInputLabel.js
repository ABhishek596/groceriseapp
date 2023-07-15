import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../src/components/file';
import Icons from '../components/icons/Icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import fontFamily from '../styles/fontFamily';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const TextInputLabel = ({
  label,
  placeHolder,
  onChangeText = () => {},
  onEndEditing = () => {},
  value,
  inputStyle = {},
  rightIcon,
  onPressRight,
  name,
  iconType,
  iconColor,
  keyboardType,
  autoCapitalize,
  iconTypew,
  namew,
  iconColorw,
  ...props
}) => {
  return (
    // <KeyboardAwareScrollView>
      <View style={{...styles.inputStyle, ...inputStyle}}>
        <Text style={styles.lableTextStyle}>{label}</Text>

        <View style={styles.flexView}>
          {/* <Icons
            iconType={iconTypew}
            name={namew}
            size={25}
            color={iconColorw}
            style={{marginLeft:wp('3')}}
          /> */}
          <TextInput
            placeholder={placeHolder}
            style={styles.inlineStyle}
            {...props}
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="email"
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
            value={value}
            underlineColorAndroid="transparent"
          />
          <Pressable onPress={onPressRight}>
            <Icons
              iconType={iconType}
              name={name}
              size={25}
              color={iconColor}
              style={{marginRight:wp('3')}}/>
          </Pressable>
        </View>
      </View>
    // </KeyboardAwareScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8F9',
    borderRadius: moderateScale(4),
    width: wp('85'),
    alignSelf: 'center',
  },
  inlineStyle: {
    width: wp('66%'),
    paddingVertical: moderateScaleVertical(12),
    fontSize: scale(14),
    color: '#000000',
    // fontFamily:fontFamily.semibold,
    borderRadius: scale(5),
    paddingHorizontal: moderateScale(10),
    // borderBottomWidth:1,
    // borderBottomColor:'grey',
    // backgroundColor:'yellow',
    // height:hp('6')
  },
  lableTextStyle: {
    fontSize: scale(16),
    color: '#6E7A7E',
    paddingVertical: moderateScaleVertical(10),
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F8F9',
    borderRadius: 5,
    alignSelf:'center',
    width:wp('90')
  },
});

//make this component available to the app
export default TextInputLabel;
