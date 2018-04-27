import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Forms/SignUpForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#98EE90',
    paddingHorizontal: 16
  },
});

class SignUp extends Component {
  registroDeUsuario = (values) => {
    this.props.registro(values);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignUpForm registro={this.registroDeUsuario} />
        <Button
          title="SignIn"
          onPress={() => {
            navigation.goBack();
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
  registro: (values) => {
    dispatch({ type: 'REGISTRO', datos: values });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

