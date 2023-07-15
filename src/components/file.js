import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import colors from './colors';
import mainStyles from './colors';
import styles from './fileStyle';
import Icons from './icons/Icons';
export const FormInputField = ({
  error,
  fieldName,
  onChangeText,
  value,
  placeholder,
  autoFocus,
  hide = false,
  inputContainerStyle,
  fieldMainTxt,
  keyboardType,
  returnKeyType,
  placeholderTextColor,
  containerStyle,
  textInputStyle,
  editable,
  autoCapitalize,
  onFocus,
  onBlur,
  key,
  inputBorderColor,
  optional,
  disable,
  multiline,
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}} key={key}>
      {fieldName ? (
        <Text style={{...mainStyles.lableTxt, ...fieldMainTxt}}>
          {fieldName}
          {optional ? (
            <Text style={{color: colors.inactive + 40}}>(Optional) </Text>
          ) : null}
        </Text>
      ) : null}
      <View
        style={{
          ...styles.inputContainer(inputBorderColor, error, disable),
          ...inputContainerStyle,
        }}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType || 'default'}
          returnKeyType={returnKeyType}
          autoFocus={autoFocus}
          editable={editable}
          placeholder={placeholder}
          secureTextEntry={hide}
          autoCapitalize={autoCapitalize || 'words'}
          scrollEnabled={false}
          placeholderTextColor={placeholderTextColor || 'lightgrey'}
          style={{...mainStyles.textInputStyle, ...textInputStyle}}
          onFocus={onFocus}
          onBlur={onBlur}
          // multiline={multiline || false}
        />
      </View>
      <View style={mainStyles.height1}>
        {error && <Text style={mainStyles.error}>{error}</Text>}
      </View>
    </View>
  );
};

export const ErrorMsg = ({error, containerStyle}) => {
  return (
    <View
      style={{...styles.container, ...containerStyle, ...{height: hp('1.4%')}}}>
      {error && <Text style={mainStyles.error}>{error}</Text>}
    </View>
  );
};

export const CheckBox1 = ({}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
    </View>
  );
};

export const FormSmallInputField = ({
  error,
  fieldName,
  onChangeText,
  value,
  placeholder,
  autoFocus,
  hide = false,
  inputContainerStyle,
  fieldMainTxt,
  textInputStyle,
  containerSmall,
  onFocus,
  onBlur,
  editable,
  errorStyle,
  inputBorderColor,
  disable,
  keyboardType,
  returnKeyType,
}) => {
  return (
    <View>
      <View style={{...styles.containerSmall, ...containerSmall}}>
        <Mytxt
          txt={fieldName}
          style={{
            ...mainStyles.lableTxt,
            ...fieldMainTxt,
            ...mainStyles.width42,
          }}
        />
        <View
          style={{
            ...styles.smaillInputContainer(inputBorderColor, error, disable),
            ...inputContainerStyle,
          }}>
          <TextInput
            onChangeText={onChangeText}
            value={value}
            autoFocus={autoFocus}
            placeholder={placeholder}
            secureTextEntry={hide}
            autoCapitalize="words"
            placeholderTextColor="lightgrey"
            onFocus={onFocus}
            onBlur={onBlur}
            editable={editable}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            style={{
              ...mainStyles.textInputStyle,
              ...textInputStyle,
              ...mainStyles.width37,
            }}
          />
        </View>
        <View style={{...{height: hp('1.4')}, ...errorStyle}}>
          {error ? <Text style={mainStyles.error}>{error}</Text> : null}
        </View>
      </View>
    </View>
  );
};

export const FormMaxInputField = ({
  error,
  fieldName,
  onChangeText,
  value,
  numberOfchar,
  placeholder,
  autoFocus,
  hide = false,
  inputContainerStyle,
  fieldMainTxt,
  limitShow,
  inputBorderColor,
}) => {
  const [characterOne, setCharacterOne] = useState(0);

  return (
    <View style={styles.containerMax}>
      <Mytxt
        txt={fieldName}
        style={{...mainStyles.lableTxt, ...fieldMainTxt}}
      />
      <View
        style={{
          ...styles.maxInputContainer(inputBorderColor, error),
          ...inputContainerStyle,
        }}>
        <TextInput
          maxLength={2000}
          multiline
          onChangeText={onChangeText}
          value={value}
          autoFocus={autoFocus}
          placeholder={placeholder}
          secureTextEntry={hide}
          autoCapitalize="sentences"
          placeholderTextColor="lightgrey"
          style={styles.maxtextInputStyle}
        />
      </View>
      {limitShow == false ? null : (
        <Text
          style={{
            color: colors.inactive,
            fontSize: hp('1.5'),
            fontWeight: '400',
            fontFamily: 'Roboto-Medium',
          }}>
          {`${value?.length}/ 2000 character limit`}
        </Text>
      )}
      {error && <Text style={mainStyles.error}>{error}</Text>}
    </View>
  );
};

export const SubmitBtn = ({
  label,
  onPress,
  style,
  txtStyle,
  icon,
  iconSize,
  iconColor,
  iconType,
  iconStyle,
  disable,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.submitBtnContainer(disable), ...style}}>
        {icon ? (
          <Icons
            name={icon}
            iconType={iconType}
            size={iconSize || 30}
            color={iconColor || colors.white}
            style={iconStyle}
          />
        ) : null}
        <Text style={{...styles.submitBtnLabel, ...txtStyle}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const RoundBtn = ({onPress, style, iconSize, iconColor, disable}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{...styles.roundBtnContainer(disable), ...style}}>
        <Icons
          name={'arrowright'}
          iconType={'AntDesign'}
          size={iconSize || 40}
          color={
            iconColor ? iconColor : disable ? colors.process : colors.inactive
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export const SubmitBtn2 = ({label, onPress, style, txtStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.submitBtnContainer2, ...style}}>
        <Text style={{...styles.submitBtnLabel, ...txtStyle}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const SubmitBtn1 = ({label, onPress, style, txtStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.submitBtnContainer1, ...style}}>
        <Text style={{...styles.submitBtnLabel1, ...txtStyle}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const Mytxt = ({txt, style}) => {
  return <Text style={{...styles.txt, ...style}}>{txt}</Text>;
};

export const TxtHighlight = ({txt, style, highLightTxt, txt1}) => {
  return (
    <>
      <Text style={{...styles.txtHighlight, ...style}}>
        {txt ? `${txt} ` : null}
        <Text style={styles.txtHighlightBold}>
          {highLightTxt ? `${highLightTxt} ` : null}
        </Text>
        <Text>{txt1 ? `${txt1} ` : null}</Text>
      </Text>
    </>
  );
};

export const MytxtIcon = ({
  txt,
  styleTxt,
  icon,
  iconSize,
  iconColor,
  styleIcon,
  iconType,
  underLine,
  myTextIconView,
  underLineStyle,
  onPressOcticons,
}) => {
  return (
    <>
      <View style={{...styles.myTextIconView, ...myTextIconView}}>
        <Icons
          iconType={iconType}
          name={icon}
          size={iconSize || 30}
          color={iconColor || colors.themeColor}
          style={{...styles.styleIcon, ...styleIcon}}
          onPress={onPressOcticons}
        />
        <Mytxt txt={`${txt}`} style={{...styleTxt}} />
      </View>
      {underLine ? (
        <View style={{...styles.underLine, ...underLineStyle}} />
      ) : null}
    </>
  );
};

export const SimpleHeader = ({
  name,
  navigation,
  size,
  onPress,
  borderBottomWidth,
}) => {
  return (
    <View
      style={{
        height: hp('7%'),
        width: wp('100%'),
        justifyContent: 'center',
        borderBottomColor: colors.inputBorderColor,
        borderBottomWidth: borderBottomWidth,
        marginTop: hp('1'),
      }}>
      <View
        style={{
          width: wp('90%'),
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // borderWidth: 2,
          // borderColor: colors.primary,
        }}>
        <Icons
          iconType={'AntDesign'}
          name="left"
          size={size}
          color={colors.black}
          // onPress={() => navigation.goBack()}
          onPress={onPress}
        />
        <Mytxt
          txt={name}
          style={{
            color: colors.black,
            // marginLeft: wp('4'),
            fontSize: hp('2.5'),
            // alignSelf: 'flex-start',
            fontWeight: 'bold',
          }}
        />
        <Icons
          iconType={'SimpleLineIcons'}
          name="camera"
          size={size}
          color={colors.black}
          // onPress={() => navigation.goBack()}
          // onPress={onPress}
        />
      </View>
    </View>
  );
};

export const MyButton = ({
  title,
  bgColor,
  h,
  w,
  onPress,
  txtcolor,
  radius,
  borderColor,
  fontSize,
  bw,
}) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={{
          backgroundColor: bgColor,
          height: h,
          width: w,
          borderWidth: bw,
          borderRadius: radius,
          borderColor: borderColor,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: txtcolor, fontSize: fontSize}}>{title}</Text>
      </Pressable>
    </View>
  );
};

export const CustomButton = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: bg}]}
      onPress={onClick}>
      <Text style={{color: color, fontSize: 18, fontWeight: '500'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const HeaderScreen = ({
  iconTypeLeft,
  nameLeft,
  iconTypeRight,
  nameRight,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.round}>
        <Icons
          iconType={iconTypeLeft}
          name={nameLeft}
          size={15}
          color={'#000000'}
        />
      </View>
      <View style={styles.round}>
        <Icons
          iconType={iconTypeRight}
          name={nameRight}
          size={15}
          color={'#000000'}
        />
      </View>
    </View>
  );
};

export const HeaderScreen1 = ({iconTypeLeft, nameLeft}) => {
  return (
    <View style={styles.header}>
      <View style={styles.round}>
        <Icons
          iconType={iconTypeLeft}
          name={nameLeft}
          size={15}
          color={'#000000'}
        />
      </View>
    </View>
  );
};

export const HeaderScreentxt = ({
  iconTypeLeft,
  nameLeft,
  iconTypeRight,
  nameRight,
  txt,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.round}>
        <Icons
          iconType={iconTypeLeft}
          name={nameLeft}
          size={15}
          color={'#000000'}
        />
      </View>
      <Text style={styles.txtab}>{txt}</Text>
      <View style={{width: wp('10')}}>
        {/* <Icons
          iconType={iconTypeRight}
          name={nameRight}
          size={15}
          color={'#000000'}
        /> */}
      </View>
    </View>
  );
};

export const HeaderUser = ({source, username, location, onPress}) => {
  return (
    <View style={styles.titleBar}>
      <Image style={styles.userImage} source={source} />
      <View style={styles.userInfo}>
        <View style={styles.address}>
          <Text style={styles.userName}>{username}</Text>
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
            <Text style={styles.addressText}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Icons
          name="camerao"
          iconType="AntDesign"
          size={18}
          color={colors.black}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

import {Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const moderateScaleVertical = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
const textScale = percent => {
  const screenHeight = Dimensions.get('window').height;
  //calculate absolute ratio for bigger screens 18.5:9 requiring smaller scaling
  const ratio =
    Dimensions.get('window').height / Dimensions.get('window').width;
  //Guideline sizes are based on standard ~5″ screen mobile device
  const deviceHeight = 375
    ? screenHeight * (ratio > 1.8 ? 0.126 : 0.15) //Set guideline depending on absolute ratio
    : Platform.OS === 'android'
    ? screenHeight - StatusBar.currentHeight
    : screenHeight;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};

export {
  scale,
  verticalScale,
  textScale,
  moderateScale,
  moderateScaleVertical,
  width,
  height,
};
