import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Favorites, Home, List, NewList} from '../screens';
import {Lists} from '../interfaces/screen/Lists';

export type RootStackParams = {
  Home: undefined;
  NewList: {item?: Lists; fromFav?: boolean};
  List: undefined;
  Favorite: undefined;
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
      <Stack.Screen name="Favorite" component={Favorites} />
      <Stack.Screen name="NewList" component={NewList} />
    </Stack.Navigator>
  );
};

export default Navigator;
