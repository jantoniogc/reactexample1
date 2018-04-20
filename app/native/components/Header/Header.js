import React from 'react';
import { Toolbar } from 'react-native-material-ui'

const dummy = () => {}

const Header = props =>
  <Toolbar
    leftElement='menu'
    centerElement='Recibidoss'
    searchable={{placeholder: 'Buscar'}}
    onLeftElementPress={props.onOpenDrawer}
  />

export default Header
