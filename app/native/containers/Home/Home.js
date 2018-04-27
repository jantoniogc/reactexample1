import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Home'
    })
  }

  render() {
    return (
      <View style={{ zIndex: -1, padding: 10 }}>
        <Text>En esta aplicación se ven los distintos componentes de React Native Material UI</Text>
      </View>
    );
  }
}
