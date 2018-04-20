import React from 'react';
import { Toolbar } from 'react-native-material-ui';
import { YellowBox } from 'react-native';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

const dummy = () => {}

const Header = props =>
  <Toolbar
    leftElement='menu'
    centerElement='Recibidos'
    searchable={{placeholder: 'Buscar'}}
    onLeftElementPress={props.onOpenDrawer}
  />

export default Header
