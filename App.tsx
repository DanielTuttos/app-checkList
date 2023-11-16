/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {DbContextProvider} from './src/context/DBContext';
// import {SQLiteDatabase} from 'react-native-sqlite-storage';
// import {Home} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './src/navigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <DbContextProvider>
        {/* <Home /> */}
        <TabNavigator />
      </DbContextProvider>
    </NavigationContainer>
  );
}

export default App;
