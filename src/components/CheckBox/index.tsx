import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CheckBoxProps} from '../../interfaces/components/checkBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {colors} from '../../theme';

const CheckBox: React.FC<CheckBoxProps> = ({value, onChange}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: value ? colors.primary : 'transparent',
        },
      ]}
      onPress={() => onChange(!value)}>
      {value && (
        <Ionicons
          name={'checkmark-outline'}
          size={20}
          color={colors.backgroundPrimary}
          style={{fontWeight: '800'}}
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
