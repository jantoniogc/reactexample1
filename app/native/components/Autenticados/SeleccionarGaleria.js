// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { CargarImagenPublicacionActions } from '../../../store2/actions';
import SeleccionarImagen from '../SeleccionarImagen';


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  imagen: {
    flex: 2,
  },
  texto: {
    flex: 2,
  },
  button: {
    flex: 2,
  }

});


// create a component
class SeleccionarGaleria extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imagen}>
          <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} />
        </View>
        <View style={styles.texto}>
          <Text>SeleccionarGaleria</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Autor"
            onPress={() => {
              navigation.navigate('Autor');
            }}
          />
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  imagen: state.reducerImagenPublicacion
});
// make this component available to the app
const mapDispatchToProps = dispatch => ({
  cargarImagen: (imagen) => {
    dispatch(CargarImagenPublicacionActions(imagen));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
