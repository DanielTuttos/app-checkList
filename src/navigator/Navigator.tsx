import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home, List, NewList} from '../screens';
import { Lists } from '../interfaces/screen/Lists';

export type RootStackParams = {
  Home: undefined;
  NewList: {item?: Lists};
  List: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="NewList" component={NewList} />
    </Stack.Navigator>
  );
};

export default Navigator;
