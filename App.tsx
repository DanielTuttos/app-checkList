import 'react-native-gesture-handler';
import React from 'react';
import {DbContextProvider} from './src/context/DBContext';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator';

function App(): JSX.Element {
  return (
    <DbContextProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </DbContextProvider>
  );
}

export default App;
