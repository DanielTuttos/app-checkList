import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../screens';
// import { Movie } from '../interfaces/movieInterfaces';
// import { DetailScreen } from '../screens/DetailScreen';
// import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParams = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;