import 'react-native-gesture-handler';
import React from 'react';
import {DbContextProvider} from './src/context/DBContext';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator';
import {PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <DbContextProvider>
        <NavigationContainer>
          <Navigator />
          <Toast />
        </NavigationContainer>
      </DbContextProvider>
    </PaperProvider>
  );
}

export default App;
