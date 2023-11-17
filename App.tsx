import 'react-native-gesture-handler';
import React from 'react';
import {DbContextProvider} from './src/context/DBContext';
// import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {Home} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './src/navigator';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <DbContextProvider>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </DbContextProvider>
    </NavigationContainer>
  );
}

export default App;
