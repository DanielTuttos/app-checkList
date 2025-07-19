import React from 'react';
import {View} from 'react-native';
import {TabNavigator} from '../../navigator';
import { styles } from './styles';

const Home = () => {
  return (
    <View
      style={styles.container}>
      <TabNavigator />
    </View>
  );
};

export default Home;