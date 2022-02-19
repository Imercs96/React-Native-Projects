import 'react-native-gesture-handler';
import React from 'react'
import { LogBox } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { Tabs } from './src/navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return(
    <NavigationContainer>
      {/* <Navigation /> */}
      <Tabs />
    </NavigationContainer>
  )
};

export default App;
