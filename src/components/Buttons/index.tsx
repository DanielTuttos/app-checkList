import React from 'react';
import {ButtonsProps} from '../../interfaces/components/buttons';
import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const Buttons: React.FC<ButtonsProps> = ({
  label,
  onPress,
  nameIcon,
  customStyle,
  mode = 'contained',
}) => {
  return (
    <Button
      icon={({size, color}) =>
        nameIcon ? <Ionicons name={nameIcon} size={size} color={color} /> : null
      }
      mode={mode}
      onPress={onPress}
      style={[styles.button, customStyle]}>
      {label}
    </Button>
  );
};

export default Buttons;
