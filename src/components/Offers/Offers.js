import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Offers = () => {
  return (
    <View style={styles.container}>
      {/* First row */}
      <View style={[styles.box, { backgroundColor: '#ff7675' }]}>
        <Text style={styles.text}>Flat 50% off</Text>
      </View>
      <View style={[styles.box, { backgroundColor: '#fdcb6e' }]}>
        <Text style={styles.text}>Flat 40% off</Text>
      </View>
      <View style={[styles.box, { backgroundColor: '#00b894' }]}>
        <Text style={styles.text}>Flat 30% off</Text>
      </View>

      {/* Second row */}
      <View style={[styles.box, { backgroundColor: '#0984e3' }]}>
        <Text style={styles.text}>Picks of the month</Text>
      </View>
      <View style={[styles.box, { backgroundColor: '#6c5ce7' }]}>
        <Text style={styles.text}>Under $99</Text>
      </View>
      <View style={[styles.box, { backgroundColor: '#e84393' }]}>
        <Text style={styles.text}>BUY 1 GET 1 FREE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  box: {
    width: '30%',
    height: 100,
    margin: '1.5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins-BoldItalic',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Offers;
