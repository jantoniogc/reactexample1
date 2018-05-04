import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Forms/SignUpForm';
import {
  RegistroActions,
  CargarImagenActions,
  LimpiarImagenActions
} from '../../../store2/actions';
import SeleccionarImagen from '../SeleccionarImagen';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: '#98EE90',
    paddingHorizontal: 16
  },
});

class SignUp extends Component {
  componentWillUnmount = () => {
    this.props.limpiarImagen();
  }
  registroDeUsuario = (values) => {
    this.props.registro(values);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} />
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
  numero: state.reducerPrueba,
  imagen: state.reducerImagenSignUp
});

const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch(RegistroActions(values));
  },
  cargarImagen: (values) => {
    dispatch(CargarImagenActions(values));
  },
  limpiarImagen: (values) => {
    dispatch(LimpiarImagenActions(values));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

