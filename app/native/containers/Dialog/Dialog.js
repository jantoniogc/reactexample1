import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Button, Dialog as MUIDialog, DialogDefaultActions } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default class Dialog extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Dialog'
    })
  }

  constructor () {
    super()

    this.state = {
      open: false
    }
  }

  toggleDialog () {
    this.setState({
      open: !this.state.open
    })
  }

  renderDialog (open) {
    if (!open) {
      return null
    }
    // TODO: arreglar el zIndex del diálogo
    return (
      <View style={{zIndex: 1000, alignItems: 'center', justifyContent: 'center'}}>
        <MUIDialog>
          <MUIDialog.Title><Text>Soy un Diálogo</Text></MUIDialog.Title>
          <MUIDialog.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </MUIDialog.Content>
          <MUIDialog.Actions>
            <DialogDefaultActions
               actions={['Aceptar', 'Cancelar']}
               onActionPress={() => {}}
            />
          </MUIDialog.Actions>
        </MUIDialog>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderDialog(this.state.open)}
        <Button onPress={this.toggleDialog.bind(this)} text='Mostrar Dialogo' />
        <Text>{this.state.open? 'Abierto': 'cerrado'}</Text>
      </View>
    )
  }
}
