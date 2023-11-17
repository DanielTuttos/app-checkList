import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorites, Home, List} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Tab} from '@react-navigation/buttons-tab';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          if (route.name === 'List') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'star' : 'star-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
