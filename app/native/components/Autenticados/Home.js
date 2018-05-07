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


class Home extends Component {
  render() {
    const { navigation } = this.props;
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Button
          title="Autor"
          onPress={() => {
            navigation.navigate('Autor');
          }}
        />
        <Button
          title="Comentarios"
          onPress={() => {
            navigation.navigate('Comentarios');
          }}
        />
      </View>
    );
  }
}


export default Home;
