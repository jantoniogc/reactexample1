import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet, Switch, ScrollView } from 'react-native'

import { Checkbox, RadioButton } from 'react-native-material-ui'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class SelectionControls extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Selection controls'
    })
  }

  constructor () {
    super()

    this.state = {
      items: [
        'Uno',
        'Dos',
        'Tres',
        'Cuatro',
        'Cinco',
        'Seis',
        'Siete',
        'Ocho',
        'Nueve',
        'Diez'
      ].map(label => ({label, checked: false}))
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck (checked, index) {
    console.log(checked)
    console.log(index)
    let items = this.state.items.slice()
    let { label } = this.state.items[index]
    items[index] = {label, checked}
    this.setState({
      items
    })
  }

  renderThing (items, Component) {
    return items.map(({label, checked}, i) =>
      <Component
        label={label}
        key={label}
        value={i}
        checked={checked}
        onCheck={this.handleCheck}
      />
    )
  }

  renderSwitches (items) {
    // IDEA: Switch nativos!
    return items.map(({label, checked}, i) =>
      <Switch key={label} value={checked} onValueChange={checked => this.handleCheck(checked, i)}/>
    )
  }

  render () {
    return (

        <ScrollView>
          {this.renderThing(this.state.items, Checkbox)}
          {this.renderThing(this.state.items, RadioButton)}
        </ScrollView>

    )
  }
}
