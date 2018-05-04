import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Forms/SignInForm';
import { LoginActions } from '../../../store2/actions';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#98EE90',
    paddingHorizontal: 16
  }
});

class SignIn extends Component {
  signInDeUsuario = (values) => {
    this.props.login(values); // Ejecuta el dispach "login" con los datos
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm login={this.signInDeUsuario} />
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


const mapStateToProps = state => ({
  numero: state.reducerPrueba
});

const mapDispatchToProps = dispatch => ({
  login: (values) => {
    dispatch(LoginActions(values));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

