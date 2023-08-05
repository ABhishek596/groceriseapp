import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import styles from '../Home/styles';
import Icons from '../../components/icons/Icons';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import colors from '../../components/colors';
import {Profileitem} from '../../components/file';
import {JsonData} from '../../components/data/JsonData';

const Profile = ({navigation, route}) => {
  // console.log(JsonData.flatlist_data);
  // const {onSignOut} = route.params || {};

  // console.log('onSignOut', onSignOut);

  // const handleSignOut = () => {
  //   // After successful sign-in, call onSignIn function to update isAuthenticated state in RootNavigator
  //   onSignOut && onSignOut();
  // };

  const Item = ({title, iconType, name, page }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(page);
      }}
    
      >
      <Profileitem title={title} name={name} iconType={iconType} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileheader}>
        <View>
          <Icons
            name={'angle-left'}
            iconType={'FontAwesome'}
            size={30}
            style={{marginHorizontal: widthPercentageToDP('4')}}
            color={colors.black}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>

        <View>
          <Text style={styles.headingtxt}>Profile</Text>
        </View>
      </View>
      <Pressable onPress={() => navigation.navigate('StackNavigator')}>
        <View style={styles.usrprofile}>
          <Text style={styles.usrname}>Sara Taylor</Text>

          <View style={styles.email}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9eUgG3ISJKhklLSPIxFs8UKnTyBd_L0w6Q&usqp=CAU',
                }}
              />
              <Text style={styles.usremail}>abhishekkoushal0889@gmail.com</Text>
            </View>

            <Icons
              name={'angle-right'}
              iconType={'FontAwesome'}
              size={30}
              style={{}}
              color={colors.black}
              // onPress={()=>navigation.navigate('StackNavigator')}
            />
          </View>
          <Text style={styles.pnumber}>82349588907</Text>
        </View>
      </Pressable>
      {/* <Profileitem title={'My Orders'} name={'box'} iconType={'Feather'} />
      <Profileitem title={'Notifications'} name={'box'} iconType={'Feather'} />
      <Profileitem title={'Wishlist'} name={'box'} iconType={'Feather'} />
      <Profileitem
        title={'Delivery Addresses'}
        name={'box'}
        iconType={'Feather'}
      />
      <Profileitem title={'Legal Information'} name={'box'} iconType={'Feather'} />
      <Profileitem title={'Sign Out'} name={'box'} iconType={'Feather'} /> */}
      <View style={{flex: 1}}>
        <FlatList
          data={JsonData.flatlist_data}
          renderItem={({item}) => (
            <Item
              title={item.title}
              iconType={item.iconType}
              name={item.name}
              page={item.page}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View />
    </SafeAreaView>
  );
};

export default Profile;
