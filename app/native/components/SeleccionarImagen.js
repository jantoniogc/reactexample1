import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  ImageContainer: {
    width: 160,
    height: 160,
    borderRadius: 80
  }
});

const SeleccionarImagen = (props) => {
  const seleccionaUnaImagen = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { imagen: response };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        props.cargar(source);
      }
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={seleccionaUnaImagen}>
        <View style={styles.ImageContainer}>
          {
            props.imagen ?
              <Image
                style={styles.ImageContainer}
                source={props.imagen.imagen}
              />
              :
              <Image
                style={styles.ImageContainer}
                source={require('../../../assets/magarite.jpg')}
              />

          }

        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;
