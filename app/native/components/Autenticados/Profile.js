import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Profiles </Text>
        <Button
          title="Publicación"
          onPress={() => {
            navigation.navigate('Publicacion');
          }}
        />
      </View>
    );
  }
}

export default Profile;
