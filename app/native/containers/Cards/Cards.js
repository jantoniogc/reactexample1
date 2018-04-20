import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import { Card, Button } from 'react-native-material-ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default class Cards extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Cards'
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Card>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{width: 300, height: 300}}
              source={require('../../img/duck.jpg')}
            />
          </View>
          <View style={{marginLeft: 13, paddingTop: 4, paddingBottom: 4}}>
            <Text style={{fontSize: 25, color: 'black'}}>Título de la tarjeta</Text>
          </View>
          <View style={{marginLeft: 17}}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button text='Acción 1'/>
            <Button text='Acción 2'/>
          </View>
        </Card>
      </View>
    )
  }
}
