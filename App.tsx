import 'react-native-gesture-handler';
import React from 'react';
import RootStack from './src/navigator/RootStack';
import {Provider} from 'react-redux';
import store from './src/redux';

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
