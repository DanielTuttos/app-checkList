import React from 'react';
import {ButtonsProps} from '../../interfaces/components/buttons';
import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const Buttons: React.FC<ButtonsProps> = ({label, onPress, nameIcon}) => {
  return (
    <Button
      icon={({size, color}) =>
        nameIcon ? <Ionicons name={nameIcon} size={size} color={color} /> : null
      }
      mode="contained"
      onPress={onPress}
      style={styles.button}>
      {label}
    </Button>
  );
};

export default Buttons;
