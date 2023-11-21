import React from 'react';
import {View} from 'react-native';
import {TabNavigator} from '../../navigator';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = () => {
  return (
    <View
      style={{
        height: hp(100),
      }}>
      <TabNavigator />
    </View>
  );
};

export default Home;
