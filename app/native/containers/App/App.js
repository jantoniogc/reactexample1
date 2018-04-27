import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
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
import store from '../../../store2/Store';
import RutasNoAutenticadas from '../../components/NoAutenticados/RutasNoAutenticadas';


console.disableYellowBox = ['Remote debugger'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Wrapper = Component => props =>
  (
    <View style={styles.container}>
      {/* <Header onOpenDrawer={() => props.navigation.navigate('DrawerOpen')} />
      <Component /> */}
      <Provider store={store}>
        <RutasNoAutenticadas />
      </Provider>
    </View>
  );

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
