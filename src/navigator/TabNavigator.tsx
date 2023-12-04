import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorites, Home, List} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, text} from '../theme';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          if (route.name === 'Listas') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'star' : 'star-outline';
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.backgroundPrimary,
        tabBarStyle: {
          backgroundColor: colors.backgroundSecondary,
          height: 80,
          paddingBottom: 30,
        },
        tabBarLabelStyle: {
          fontSize: text.caption
        }
      })}>
      <Tab.Screen name="Listas" component={List} />
      <Tab.Screen name="Favoritos" component={Favorites} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
