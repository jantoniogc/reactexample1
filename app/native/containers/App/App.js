import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View, Navigator, TouchableHighlight, Button } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import Home from '../Home'
import BottomNavigation from '../BottomNavigation'
import Buttons from '../Buttons'
import FloatingButtons from '../FloatingButtons'
import Cards from '../Cards'
import Dialog from '../Dialog'
import SelectionControls from '../SelectionControls'
import List from '../List'
import Gmail from '../Gmail'

import Header from '../../components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Wrapper = Component => props =>
  <View style={{ flex: 1, zIndex: -1 }}>
    <Header onOpenDrawer={() => props.navigation.navigate('DrawerOpen')} />
    <Component />
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit App.js
    </Text>
    <Text style={styles.instructions}>
      {instructions}
    </Text>
  </View>

const Routes = DrawerNavigator({
  Home: { screen: Wrapper(Home) },
  BottomNavigation: { screen: Wrapper(BottomNavigation) },
  Buttons: { screen: Wrapper(Buttons) },
  FloatingButtons: { screen: Wrapper(FloatingButtons) },
  Cards: { screen: Wrapper(Cards) },
  Dialog: { screen: Wrapper(Dialog) },
  SelectionControls: { screen: Wrapper(SelectionControls) },
  List: { screen: Wrapper(List) },
  Gmail: { screen: Wrapper(Gmail) }
});

export default Routes
