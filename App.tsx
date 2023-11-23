import 'react-native-gesture-handler';
import React from 'react';
import {DbContextProvider} from './src/context/DBContext';
// import {Home} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaView, Text} from 'react-native';
import {Navigator} from './src/navigator';

function App(): JSX.Element {
  console.log('navigaor: ', Navigator);
  return (
    <DbContextProvider>
      {/* <SafeAreaView> */}
      <NavigationContainer>
        <Navigator />
        {/* <Home /> */}
        {/* <Text>Hello gg</Text> */}
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </DbContextProvider>
  );
}

export default App;
