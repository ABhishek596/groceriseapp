//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
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
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// create a component    <View></View>

const FieldActivityTwo = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
      // onPress={() => navigation.navigate('DrawerNavigator')}
      >
        {/* <View style={styles.header}>
          <View style={styles.one}>
            <View style={styles.arrow}>
              <Icons
                name={'bars'}
                iconType={'AntDesign'}
                size={30}
                color="#f54900cc"
                // onPress={() => Alert.alert('Item Removed')}
              />
            </View>
            <Text style={styles.title}>Daily Field Activity Summary</Text>
          </View>

          <View style={styles.two}>
            <Text style={styles.date} /// this view no necerroy
            >
            23/09/56 </Text> 
            <View>
              <Icons
              name={'downcircle'}
              iconType={'AntDesign'}  /// this view no necerroy
              size={20}
              color="#f54900cc"
              // onPress={() => Alert.alert('Item Removed')}
            />
            </View>
          </View>
        </View> */}
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.topne111}>
            <View style={styles.inside}>
              <Text style={styles.txt2}>Employe Name</Text>
              <Text style={styles.txt3}>Emilia</Text>
            </View>
            <View style={styles.inside}>
              <Text style={styles.txt2}>Date</Text>
              <Text style={styles.txt3}>MM/DD/YY</Text>
            </View>
          </View>

          <View style={styles.mflistain1}>
            <View style={styles.inmflistain1}>
              <View>
                <Text style={styles.title21}>Meeting Notes</Text>
              </View>
            
            </View>

            <View style={styles.topne1}>
          
              <TextInput
                placeholder="Req Name"
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                style={{
                  padding: 8,
                  backgroundColor: '#FAFAFA',
                  width: wp('85'),
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={styles.topne1b}>
         
              <TextInput
                placeholder="Notes"
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                style={{
                  padding: 20,
                  backgroundColor: '#FAFAFA',
                  width: wp('85'),
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={styles.topne1b}>
              <TextInput
                placeholder="Notes"
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                style={{
                  padding: 20,
                  backgroundColor: '#FAFAFA',
                  width: wp('85'),
                  borderRadius: 10,
                }}
              />
            </View>
      

            <View style={styles.topne1c}>
        
              <TextInput
                placeholder="Req Name"
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                style={{
                  padding: 8,
                  backgroundColor: '#FAFAFA',
                  width: wp('85'),
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={styles.topne1b}>
              <TextInput
                placeholder="Notes"
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                style={{
                  padding: 20,
                  backgroundColor: '#FAFAFA',
                  width: wp('85'),
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={styles.button}>
             <View style={styles.itemb}>
             <Icons
                name={'pluscircleo'}
                iconType={'AntDesign'}
                size={20}
                color="#f54900cc"
                // onPress={() => Alert.alert('Item Removed')}
              />
              <Text style={styles.textbutton}>ADD NEW</Text>
             </View>
            </View>
          </View>
        </View>
        <View style={styles.mflistain122}>
          <View style={styles.inmflistain1}>
            <View>
              <Text style={styles.title21}>Daily Summary for :<Text style={styles.title212}> (Date)</Text></Text>
            </View>
            
          </View>

      
          <View style={styles.topne1a}>
            <TextInput
              placeholder="Req Name"
              //   onChangeText={text => onChangeText(text)}
              //   value={value}
              style={{
                padding: 8,
                backgroundColor: '#FAFAFA',
                width: wp('40'),
                borderRadius: 10,
              }}
            />
            <TextInput
              placeholder="Req Name"
              //   onChangeText={text => onChangeText(text)}
              //   value={value}
              style={{
                padding: 8,
                backgroundColor: '#FAFAFA',
                width: wp('40'),
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.topne1a}>
            <TextInput
              placeholder="Req Name"
              //   onChangeText={text => onChangeText(text)}
              //   value={value}
              style={{
                padding: 8,
                backgroundColor: '#FAFAFA',
                width: wp('40'),
                borderRadius: 10,
              }}
            />
            <TextInput
              placeholder="Req Name"
              //   onChangeText={text => onChangeText(text)}
              //   value={value}
              style={{
                padding: 8,
                backgroundColor: '#FAFAFA',
                width: wp('40'),
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.topne1a}>
            <TextInput
              placeholder="Req Name"
              //   onChangeText={text => onChangeText(text)}
              //   value={value}
              style={{
                padding: 8,
                backgroundColor: '#FAFAFA',
                width: wp('40'),
                borderRadius: 10,
              }}
            />
            <TextInput
              placeholder="Req Name"
              //   onChangeText={text => onChangeText(text)}
              //   value={value}
              style={{
                padding: 8,
                backgroundColor: '#FAFAFA',
                width: wp('40'),
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.topne1b}>
        
            <TextInput
              placeholder="Notes"
              //   onChangeText={text => onChangeText(text)}
              //   value={value}
              style={{
                padding: 20,
                backgroundColor: '#FAFAFA',
                width: wp('85'),
                borderRadius: 10,
              }}
            />
          </View>   
        </View>
        <View style={{height:hp('3')}}></View>
        </ScrollView>
        <View style={{height:hp('10'),flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
        <View
        style={{
          marginRight: hp('2'),
        }}>
        <SubmitBtn1
          style={{
            width: wp('38'),
            height: hp('6'),
            backgroundColor: '#fff',
            borderColor: '#350091',
            borderColor:'#f54900cc'
          }}
          txtStyle={{color: '#f54900cc', fontWeight: 'bold'}}
          label="PREVIEW"
          // onPress={() => navigation.navigate('NormalNavigator')}
        />
      </View>
      <View
        style={{
          marginLeft: hp('2'),
        }}>
        <SubmitBtn1
          style={{
            width: wp('38'),
            height: hp('6'),
            backgroundColor: '#350091',
            borderColor: '#350091',
          }}
          txtStyle={{color: '#fff', fontWeight: 'bold'}}
          label="SUBMIT"
          // onPress={() => navigation.navigate('NormalNavigator')}
        />
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
    borderBottomWidth:3,
    borderBottomColor:'#808080'+30,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: wp('4.5'),
    color: '#000000',
    marginLeft: 20,
    fontWeight: 'bold',
    // marginTop: 20,
    // bottom: 30,
  },
  date: {
    fontSize: 20,
    color: '#fff',
    marginRight: 20,
  },
  arrow: {
    // marginTop: 20,
    // bottom: 30,
    // padding: 5,
    // backgroundColor: '#fff',
  },
  one: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  two: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    // bottom: 30,
  },
  main: {
    flex: 1,
    // borderTopLeftRadius: 35,
    // borderTopRightRadius: 35,
    // borderRadius:10,
    // top: -35,
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
    height: hp('90'),
    width: wp('90'),
    alignSelf: 'center',
    // borderRadius:20,
    // backgroundColor: '#350091',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#808080'+40,
    borderWidth: 2.5,
  },
  mflistain122: {
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
    borderColor: '#808080'+40,
    borderWidth: 2.5,
    marginVertical:hp('4')
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
    width: wp('89'),
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
    fontSize: 18,
    color: '#350091',
    marginLeft: 20,
  },
  title212: {
    fontSize: 18,
    color: '#f54900cc',
    marginLeft: 20,
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
    top: hp('3.5'),
    // marginLeft: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: wp('90'),
  },
  topheadingtxt: {
    fontSize: wp('4'),
    color: '#350091',
    // marginRight: 20,arrow2
  },
  arrow2: {
    marginLeft: 10,
  },
  arrow2: {
    marginLeft: 10,
  },
  topheadingtxt2: {
    fontSize: 18,
    color: '#fff',
    padding: 1,
    backgroundColor: '#f54900cc',
    // alignSelf:'center',
    borderRadius: 5,
  },
  topne1: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    // top:15
  },
  topne1b: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 35,
  },
  topne1c: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  topne1a: {
    flexDirection: 'row',
    marginHorizontal: wp('3'),
    justifyContent: 'space-between',
    marginVertical:hp('2')
    // top: 15,
  },
  topne111: {
    flexDirection: 'row',
    // marginHorizontal: 0,
    justifyContent: 'space-between',
    width: wp('90'),
    marginTop: hp('3'),
    alignSelf: 'center',
  },
  inside: {
    height: hp('7'),
    width: wp('40'),
    borderColor: '#808080'+40,
    borderWidth: 2,
    top: 5, 
    borderRadius: 10,
    marginVertical: 5,
  },
  bott: {
    height: hp('12'),
    width: wp('83'),
    borderWidth: 1,
    borderColor: 'grey',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 15,
    top: 4,
  },
  txt2: {
    fontSize: 14,
    color: '#f54900cc',
    marginLeft: 14,
  },
  txt3: {
    fontSize: 14,
    color: '#350091',
    marginLeft: 14,
  },
  txt4: {
    fontSize: 14,
    color: '#f54900cc',
    marginLeft: 14,
  },
  txt5: {
    fontSize: 14,
    color: '#350091',
    marginLeft: 14,
  },
  button:{
    width:wp('40'),
    height:hp('7'),
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    borderWidth:2,
    borderColor:'#0000ff'+70,
    top:hp('5')
  },
  itemb:{
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'center'
  },
  textbutton:{
    color:'#f54900cc',
    marginLeft:wp('1')
  }
});

//make this component available to the app
export default FieldActivityTwo;
