import { AppRegistry } from 'react-native';
import AppRoot from './client';

AppRegistry.registerComponent('actual', () => AppRoot);
AppRegistry.runApplication("actual", {
  rootTag: document.getElementById("root")
});

