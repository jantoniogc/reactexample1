import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Home from '../Home';
import BottomNavigation from '../BottomNavigation';
import Buttons from '../Buttons';
import FloatingButtons from '../FloatingButtons';
import Cards from '../Cards';
import Dialog from '../Dialog';
import SelectionControls from '../SelectionControls';
import List from '../List';
import Gmail from '../Gmail';

import Header from '../../components/Header';


const Wrapper = Component => props =>
  (<View style={{ flex: 1, zIndex: -1 }}>
    <Header onOpenDrawer={() => props.navigation.navigate('DrawerOpen')} />
    <Component />
   </View>);

const Routes = DrawerNavigator({
  Home: { screen: Wrapper(Home) },
  BottomNavigation: { screen: Wrapper(BottomNavigation) },
  Buttons: { screen: Wrapper(Buttons) },
  FloatingButtons: { screen: Wrapper(FloatingButtons) },
  Cards: { screen: Wrapper(Cards) },
  Dialog: { screen: Wrapper(Dialog) },
  SelectionControls: { screen: Wrapper(SelectionControls) },
  List: { screen: Wrapper(List) },
  Gmail: { screen: Wrapper(Gmail) },
});

export default Routes;
