import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons from react-native-vector-icons
import colors from '../colors';

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Male', 'Female'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <View style={styles.dropdownButtonContent}>
          <Text style={styles.dropdownButtonText}>{selectedOption || 'Select an Option'}</Text>
          <MaterialIcons
            name={isOpen ? 'arrow-drop-up' : 'arrow-drop-down'}
            size={wp('7')}
            color={colors.black}
          />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.dropdownList}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownListItem}
              onPress={() => selectOption(option)}
            >
              <Text style={styles.dropdownListItemText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  dropdownButton: {
    width: wp('90'),
    height:35,
    // padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.black + 80,
    // borderBottomColor: 'yellow',
  },
  dropdownButtonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownButtonText: {
    flex: 1,
    textAlign: 'left',
    fontSize: wp('4'),
    color: colors.black,
    marginLeft:wp('1')
  },
  dropdownList: {
    width: 200,
    maxHeight: 150,
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  dropdownListItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownListItemText: {
    fontSize: wp('4'),
    color: colors.black,
  },
});

export default CustomDropdown;
