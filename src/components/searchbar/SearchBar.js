import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icons from '../icons/Icons';
import colors from '../colors';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <Icons
        name="search1"
        iconType="AntDesign"
        size={15}
        color={colors.black}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search for Products..."
        style={styles.input}
        value={props.searchText}
        onChangeText={text => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
      <View style={styles.closebtn}>
        <Icons
          name="closecircleo"
          iconType="AntDesign"
          size={15}
          color={colors.black}
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.black,
  },
  searchIcon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    color: colors.black,
  },
});
