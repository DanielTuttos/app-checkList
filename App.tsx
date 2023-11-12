/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import SQLite from 'react-native-sqlite-storage';

function App(): JSX.Element {
  useEffect(() => {
    enabledDataBase();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const enabledDataBase = () => {
    SQLite.enablePromise(true);
    console.log('ejecutando sqlite, ', SQLite);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

export default App;
