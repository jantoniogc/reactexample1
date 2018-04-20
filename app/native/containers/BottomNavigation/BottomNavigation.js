import React, { Component, PropTypes } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { BottomNavigation as MUIBottomNavigation, Action } from 'react-native-material-ui'

const actions = [
  {label: 'Today', icon: 'bookmark-border'},
  {label: 'People', icon: 'people'},
  {label: 'Bookmark', icon: 'bookmark-border'},
  {label: 'Settings', icon: 'settings'}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigation: {
    marginTop: 70,
    flex: 1
  }
});

const BottomNavigationUno = props =>
  <MUIBottomNavigation active={props.active} hidden={false} >
    {props.actions.map(action =>
      <MUIBottomNavigation.Action
          key={action.label}
          icon={action.icon}
          label={action.label}
          onPress={props.onPress.bind(null, action.label)}
      />
    )}
  </MUIBottomNavigation>

export default class BottomNavigation extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Bottom Navigation'
    })
  }

  constructor () {
    super()

    this.state = {active: actions[0].label}
    this.onPress = this.onPress.bind(this)
  }

  onPress (active) {
    this.setState({active})
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.bottomNavigation}>
          <BottomNavigationUno
            actions={actions}
            active={this.state.active}
            onPress={this.onPress}
          />
        </View>
      </View>
    );
  }
}
