import React from 'react';
import {Text, View} from 'react-native';
import {TabNavigator} from '../../navigator';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = () => {
  return (
    <View
      style={{
        height: hp(100),
      }}>
      {/* <Text>Home</Text> */}
      <TabNavigator />
    </View>
  );
};

export default Home;
