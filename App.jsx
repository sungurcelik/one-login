import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
