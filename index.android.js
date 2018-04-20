import React from 'react'
import { AppRegistry } from 'react-native'
import { UIManager } from 'react-native'
import { ThemeProvider, COLOR } from 'react-native-material-ui'

import App from './app/native/containers/App'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const uiTheme = {
    palette: {
        primaryColor: COLOR.red500,
    }
};


const Root = () =>
  <ThemeProvider uiTheme={uiTheme}>
    <App />
  </ThemeProvider>

AppRegistry.registerComponent('reactexample1', () => Root)
