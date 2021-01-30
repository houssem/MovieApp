import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './Navigation/Navigation';
import Store from './Store/configureStore'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);

export default function App() {
  return (
    <Provider store={Store} >
      <Navigation/>
    </Provider>
  );
}
