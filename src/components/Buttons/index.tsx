import React from 'react';
import {ButtonsProps} from '../../interfaces/components/buttons';
import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import { colors } from '../../theme';

const Buttons: React.FC<ButtonsProps> = ({
  label,
  onPress,
  nameIcon,
  customStyle,
  mode = 'contained',
  colorText = colors.backgroundPrimary
}) => {
  return (
    <Button
      icon={({size, color}) =>
        nameIcon ? <Ionicons name={nameIcon} size={size} color={color} /> : null
      }
      mode={mode}
      onPress={onPress}
      textColor={colorText}
      style={[styles.button, customStyle]}>
      {label}
    </Button>
  );
};

export default Buttons;
