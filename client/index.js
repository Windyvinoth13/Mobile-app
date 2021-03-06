/**
 * @format
 */
/* import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import Provider from './Provider';
import Consumer from './Consumer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Provider);
 */

/* eslint-disable prettier/prettier */
import {AppRegistry} from 'react-native';
import Provider from './Provider';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import * as React from 'react';
import Consumer from './Consumer';
import App from './App';
import {name as appName} from './app.json';
import {enableLatestRenderer} from 'react-native-maps';
import Common from './Common';

// enableLatestRenderer();

const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#652C9E',
    accent: '#1F2221',
    background: '#121212',
    text: 'white',
    placeholder: '#797D7F',
  },
  dark: true,
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Consumer />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
