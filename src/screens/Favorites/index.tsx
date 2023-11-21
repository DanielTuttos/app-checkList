import React from 'react';
import {Text, View} from 'react-native';
import { ScreenComponent } from '../../components';

const Favorites = () => {
  return (
    <ScreenComponent title="Favoritos">
      <View>
        <Text>Hello</Text>
        {/* <Button title="insertar lista" onPress={insert} />
  <Button title="obtener lista" onPress={getList} /> */}
      </View>
    </ScreenComponent>
  );
};

export default Favorites;
