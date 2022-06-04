// This file will initialize the app if we are in a real browser
// environment (not electron)
import 'desktop-client/browser-preload';

import { AppRegistry } from 'react-native';
import AppRoot from './client';

AppRegistry.registerComponent('actual', () => AppRoot);
AppRegistry.runApplication("actual", {
  rootTag: document.getElementById("root")
});

