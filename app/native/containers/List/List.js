import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { ListItem } from 'react-native-material-ui'

const lista = [
  {icon: 'add-a-photo', text: 'Primer elemento'},
  {icon: 'airport-shuttle', text: 'Segundo elemento'},
  {icon: 'attach-file', text: 'Otro elemento'}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default class List extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Lists'
    })
  }

  render () {
    return (
      <View style={styles.container}>
        {lista.map(({icon, text}) =>
          <ListItem
            leftElement={icon}
            centerElement={text}
            key={text}/>
        )}
      </View>
    )
  }
}
