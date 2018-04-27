import React from 'react';
import { AppRegistry, UIManager, YellowBox } from 'react-native';
import { ThemeProvider, COLOR } from 'react-native-material-ui';


import App from './app/native/containers/App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const uiTheme = {
  palette: {
    primaryColor: COLOR.red500
  }
};

const Root = () =>
  (
    <ThemeProvider uiTheme={uiTheme}>
      <App />
    </ThemeProvider>
  );


const newLocal = 'reactexample1';
AppRegistry.registerComponent(newLocal, () => Root);
