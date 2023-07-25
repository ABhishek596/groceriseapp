import * as React from 'react';
import { Button, View, Text } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Text style={{top:10}}>HOMESCREEN In Development</Text>
      </View>
    );
  }