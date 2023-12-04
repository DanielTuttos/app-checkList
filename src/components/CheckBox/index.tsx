import React from 'react';
import {Text, View} from 'react-native';
import {CheckBoxProps} from '../../interfaces/components/checkBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const CheckBox: React.FC<CheckBoxProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={'checkmark-outline'} size={30} color={'blue'} />
    </View>
  );
};

export default CheckBox;
