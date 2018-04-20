import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { ActionButton, Button } from 'react-native-material-ui'

const actions = [
  {icon: 'email', label: 'Correo', name: 'email'},
  {icon: 'phone', label: 'Llamar', name: 'phone'},
  {icon: 'textsms', label: 'Mensaje', name: 'textsms'},
  {icon: 'favorite', label: 'Favorito', name: 'favorite'}
]

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonPair: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    padding: 10
  },
  buttonCategory: {
    marginBottom: 10
  }
})


export default class Buttons extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Buttons: Floating Action Button'
    })
  }

  constructor () {
    super()
    this.state = {
      transition: 'speedDial'
    }
  }

  changeTransition (type) {
    this.setState({
      transition: type
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Button onPress={this.changeTransition.bind(this, 'speedDial')} text='Dial' />
        <Button onPress={this.changeTransition.bind(this, 'toolbar')} text='Toolbar' />
        <Text>Tipo: {this.state.transition}</Text>
        <ActionButton actions={actions} transition={this.state.transition}/>
      </View>
    )
  }
}
