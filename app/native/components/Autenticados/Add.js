import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',

  },
});


class Add extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Seleccionar foto de galeria </Text>
        <Button
          title="Seleccionar galeria"
          onPress={() => {
            navigation.navigate('Seleccion');
          }}
        />
        <Text> Add </Text>
        <Button
          title="Tomar foto"
          onPress={() => {
            navigation.navigate('Seleccion');
          }}
        />
      </View>
    );
  }
}

export default Add;
