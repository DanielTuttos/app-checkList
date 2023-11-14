/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {
  getLists,
  insertList,
} from './src/services';
import { DbContextProvider, useDBContext } from './src/context/DBContext';
import { SQLiteDatabase } from 'react-native-sqlite-storage';
import { Home } from './src/screens';

function App(): JSX.Element {

  return (
    <DbContextProvider>
      <Home />
    </DbContextProvider>
  );
}

export default App;
