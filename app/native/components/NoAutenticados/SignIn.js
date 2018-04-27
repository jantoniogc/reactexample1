import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import SignInForm from './Forms/SignInForm';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#98EE90',
    paddingHorizontal: 16
  }
});

class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm />
        <Button
          title="SignUp"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    );
  }
}

export default SignIn;
