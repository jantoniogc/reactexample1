import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from '../../../store2/Servicios/firebase';
import RutasAutenticadas from '../../components/Autenticados/RutasAutenticadas';
import RutasNoAutenticadas from '../../components/NoAutenticados/RutasNoAutenticadas';
import { EstablecerSesionAction, CerrarSesionAction } from '../../../store2/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Seleccion extends Component {
  componentDidMount() {
    this.props.autenticacion();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container} >
        {/* <RutasAutenticadas /> */}
        {this.props.usuario ? <RutasAutenticadas /> : <RutasNoAutenticadas /> }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  usuario: state.reducerSession
});

const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    autenticacion.onAuthStateChanged((usuario) => {
      if (usuario) {
        dispatch(EstablecerSesionAction(usuario));
      } else {
        dispatch(CerrarSesionAction());
      }
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);

