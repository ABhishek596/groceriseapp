//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
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

const DetailsSuccess = ({navigation}) => {
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
              onPress={() => navigation.navigate('DrawerNavigator')}>
              Details
            </Text>
          </View>
          <View style={styles.two}>
            <View></View>
          </View>
        </View>
        <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
          <View style={styles.topheading}>
            <Text style={styles.topheadingtxt}>Successful Outcomes Today</Text>
            <View style={styles.arrow2}>
              <Text style={styles.topheadingtxt2}>10</Text>
            </View>
          </View>
          <View style={styles.mflistain1}>
            <View style={styles.inmflistain1}>
              <View>
                <Text style={styles.title21}>Emilia Clarke</Text>
              </View>
              <View>
                <Text style={styles.title3}>20/09/23</Text>
              </View>
            </View>

            <View style={styles.topne1}>
              <View style={styles.inside}>
                <Text style={styles.txt2}>lorem</Text>
                <Text style={styles.txt3}>10</Text>
              </View>
              <View style={styles.inside}>
                <Text style={styles.txt2}>ipsumlo</Text>
                <Text style={styles.txt3}>34</Text>
              </View>
            </View>
            <View style={styles.topne1}>
              <View style={styles.inside}>
                <Text style={styles.txt2}>some an</Text>
                <Text style={styles.txt3}>4</Text>
              </View>
              <View style={styles.inside}>
                <Text style={styles.txt2}>notes</Text>
                <Text style={styles.txt3}>45</Text>
              </View>
            </View>
            <View style={styles.topne1}>
              <View style={styles.inside}>
                <Text style={styles.txt2}>detail</Text>
                <Text style={styles.txt3}>4</Text>
              </View>
              <View style={styles.inside}>
                <Text style={styles.txt2}>and more</Text>
                <Text style={styles.txt3}>45</Text>
              </View>
            </View>
            <View style={styles.bott}>
              <Text style={styles.txt4}>Note</Text>
              <Text style={styles.txt5}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </Text>
            </View>
          </View>
          <View style={styles.mflistain12}>
            <View style={styles.inmflistain2}>
              <View>
                <Text style={styles.title212}>Meeting Notes</Text>
              </View>
              <View>
                <Text style={styles.title3}>20/09/23</Text>
              </View>
            </View>

            <View style={styles.topne1}>
              <View style={styles.inside}>
                <Text style={styles.txt2}>Message</Text>
                <Text style={styles.txt3}>1</Text>
              </View>
              <View style={styles.inside}>
                <Text style={styles.txt2}>Date</Text>
                <Text style={styles.txt3}>34/09/23</Text>
              </View>
            </View>
            <View style={styles.bott1}>
              <Text style={styles.txt41}>Note</Text>
              <Text style={styles.txt51}>No issue found</Text>
            </View>
            <View style={styles.bott}>
              <Text style={styles.txt4}>Note</Text>
              <Text style={styles.txt5}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </Text>
            </View>
          </View>
          <View style={{height: hp('5')}}></View>
        </ScrollView>
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
    borderBottomWidth: 3,
    borderBottomColor: '#808080' + 30,
  },
  title: {
    fontSize: 20,
    color: '#000000',
    marginLeft: wp('2'),
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  date: {
    fontSize: 20,
    color: '#fff',
    marginRight: 20,
  },
  arrow: {
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
    marginRight: 20,
    bottom: 30,
  },
  main: {
    flex: 1,
    // borderTopLeftRadius: 35,
    // borderTopRightRadius: 35,
    // borderRadius:10,
    // width:wp('100'),
    backgroundColor: '#fff',
    // width: wp('100'),
    // height: hp('80'),
  },
  mflistain: {
    top: 40,
    height: hp('60'),
    width: wp('90'),
    alignSelf: 'center',
    // borderRadius:20,
    // backgroundColor: '#350091',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: 'grey',
    borderWidth: 1,
  },
  mflistain1: {
    top: 40,
    height: hp('50'),
    width: wp('90'),
    alignSelf: 'center',
    // borderRadius:20,
    // backgroundColor: '#350091',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#808080' + 40,
    borderWidth: 2.5,
  },
  mflistain12: {
    top: 40,
    height: hp('50'),
    width: wp('90'),
    alignSelf: 'center',
    // borderRadius:20,
    // backgroundColor: '#350091',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#808080' + 40,
    borderWidth: 2.5,
    marginVertical: hp('4'),
  },
  inmflistain: {
    height: hp('7'),
    width: wp('89.5'),
    backgroundColor: '#350091',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inmflistain1: {
    height: hp('7'),
    width: wp('89.5'),
    top: hp('-0.2'),
    backgroundColor: '#350091',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inmflistain2: {
    height: hp('7'),
    width: wp('88'),
    // top:hp('-0.2'),
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title2: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 20,
  },
  title21: {
    fontSize: wp('5'),
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'Poppins-Regular',
  },
  title212: {
    fontSize: wp('5'),
    color: '#350091',
    marginLeft: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  title3: {
    fontSize: 18,
    color: '#fff',
    marginRight: 20,
  },
  txt: {
    top: 4,
    marginHorizontal: 8,
    alignSelf: 'center',
    color: colors.black,
  },
  topne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    top: 2,
    // alignSelf: 'center',
  },
  topne1: {
    fontSize: 14,
    color: '#350091',
    marginRight: 20,
  },
  topne2: {
    fontSize: 14,
    color: '#350091',
    marginRight: 20,
  },
  note: {
    marginLeft: 10,
    color: '#f54900cc',
    top: 5,
  },
  bottomheader: {
    height: hp('7'),
    width: wp('100'),
    backgroundColor: '#fff',
  },
  topheading: {
    flexDirection: 'row',
    top: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  topheadingtxt: {
    fontSize: 18,
    color: '#350091',
    fontFamily: 'Poppins-Regular',
    // marginRight: 20,arrow2
  },
  arrow2: {
    marginLeft: 10,
    height: hp('4'),
    width: wp('7'),
    backgroundColor: '#f54900cc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topheadingtxt2: {
    fontSize: wp('4'),
    color: '#fff',
    fontWeight: 'bold',
    // padding: 1,
    // backgroundColor: '#f54900cc',
    // alignSelf:'center',
    // borderRadius: 5,
  },
  topne1: {
    flexDirection: 'row',
    marginHorizontal: wp('3'),
    justifyContent: 'space-between',
  },
  inside: {
    height: hp('7'),
    width: wp('40'),
    borderColor: '#808080' + 40,
    borderWidth: 2,
    top: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  bott: {
    height: hp('12'),
    width: wp('83'),
    borderColor: '#808080' + 40,
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 15,
    top: 4,
  },
  bott1: {
    height: hp('9'),
    width: wp('83'),
    borderColor: '#808080' + 40,
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 15,
    top: 4,
  },
  txt2: {
    fontSize: wp('3.2'),
    color: '#f54900cc',
    marginLeft: 14,
    fontFamily: 'Poppins-Regular',
  },
  txt3: {
    fontSize: 14,
    color: '#350091',
    marginLeft: 14,
  },
  txt4: {
    fontSize: wp('3.5'),
    color: '#f54900cc',
    marginLeft: 14,
    fontFamily: 'Poppins-Regular',
  },
  txt5: {
    fontSize: wp('3'),
    color: '#350091',
    marginLeft: 14,
    fontFamily: 'Poppins-Regular',
  },
  txt41: {
    fontSize: wp('4'),
    color: '#f54900cc',
    marginLeft: 14,
    fontFamily: 'Poppins-Regular',
  },
  txt51: {
    fontSize: wp('5'),
    color: '#350091',
    marginLeft: 14,
    fontFamily: 'Poppins-Regular',
  },
});

//make this component available to the app
export default DetailsSuccess;
