//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from '../../components/icons/Icons';
import colors from '../../components/colors';
import {
  SubmitBtn1,
  FormInputField,
  FormMaxInputField,
} from '../../components/file';
// create a component    <View></View>

const History = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.header}>
          <View style={styles.one}>
            <View style={styles.arrow}>
              <Icons
                name={'arrowleft'}
                iconType={'AntDesign'}
                size={20}
                color="#f54900cc"
                onPress={() => navigation.goBack()}
              />
            </View>
            <Text
              style={styles.title}
              onPress={() => navigation.navigate('Details')}>
              History
            </Text>
          </View>
          <View style={styles.two}>
            <Text style={styles.date}>23/09/56</Text>
            <View>
              <Icons
                name={'downcircle'}
                iconType={'AntDesign'}
                size={20}
                color="#f54900cc"
                // onPress={() => Alert.alert('Item Removed')}
              />
            </View>
          </View>
          {/* <Text>History</Text> */}
          {/* <View style={styles.bottomheader}>
      </View >   */}
        </View>
        <View style={styles.main}>
          <View style={styles.mflistain}>
            <View style={styles.inmflistain}>
              <View>
                <Text style={styles.title2}>Emilia</Text>
              </View>
              <View>
                <Text style={styles.title3}>20/09/23</Text>
              </View>
            </View>
            <View style={styles.topne}>
              <Text style={styles.topne1}>#Reqs open</Text>
              <Text style={styles.topne2}>Successful interview</Text>
            </View>
            <Text style={styles.note}>Note</Text>
            <Text style={styles.txt}>
              small restaurants, bars and more focus on their dreams, we have
              decided to close our doors.
            </Text>
            <View
              style={{
                top: hp('3'),
              }}>
              <SubmitBtn1
                style={{
                  width: wp('40'),
                  height: hp('5'),
                  backgroundColor: '#350091',
                  borderColor: '#350091',
                }}
                txtStyle={{color: '#fff', fontWeight: 'bold'}}
                label="VIEW DETAILS"
              />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    height: hp('10'),
    width: wp('100'),
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#808080' + 30,
    // shadowOpacity:40,
    // shadowColor:'#808080'+40,
    // opacity:10,
    // shadowOffset:10,
    // bor
  },
  title: {
    fontSize: wp('5'),
    color: '#000000',
    marginLeft: wp('2'),
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    // marginTop: 20,
    // bottom: 30,
  },
  date: {
    fontSize: wp('5'),
    color: '#000000',
    marginRight: 20,
  },
  arrow: {
    // marginTop: 20,
    // bottom: 30,
    padding: 5,
    backgroundColor: '#fff',
  },
  one: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('2'),
  },
  two: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('3'),
    // bottom: 30,
  },
  main: {
    flex: 1,
    // borderTopLeftRadius:35,
    // borderTopRightRadius:35,
    // borderRadius:10,
    // top:-35,
    // width:wp('100'),
    backgroundColor: '#fff',
    // width: wp('100'),
    // height:hp('80')
  },
  mflistain: {
    top: 20,
    height: hp('35'),
    width: wp('90'),
    alignSelf: 'center',
    // borderRadius:20,
    // backgroundColor: '#350091',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#808080' + 40,
    borderWidth: 3,
  },
  inmflistain: {
    height: hp('7'),
    width: wp('89.4'),
    backgroundColor: '#f54900cc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    top: hp('-0.2'),
  },
  title2: {
    fontSize: wp('5'),
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'Poppins-Regular',
  },
  title3: {
    fontSize: 18,
    color: '#fff',
    marginRight: 20,
  },
  txt: {
    top: hp('1'),
    marginHorizontal: wp('1.5'),
    alignSelf: 'center',
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize:wp('4')
  },
  topne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('2'),
    top: hp('1'),
    // alignSelf: 'center',
  },
  topne1: {
    fontSize: wp('4'),
    color: '#350091',
    fontFamily: 'Poppins-Regular',
  },
  topne2: {
    fontSize: wp('4'),
    color: '#350091',
    marginRight: 20,
    fontFamily: 'Poppins-Regular',
  },
  note: {
    marginLeft: wp('2'),
    color: '#f54900cc',
    top: hp('1'),
    fontFamily: 'Poppins-Regular',
    fontSize: wp('3.5'),
  },
  bottomheader: {
    height: hp('7'),
    width: wp('100'),
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default History;
