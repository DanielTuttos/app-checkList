import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {FloatingButtonProps} from '../../interfaces/components/floatingButton';
import {styles} from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FloatingButton: React.FC<FloatingButtonProps> = ({
  customStyles,
  nameIcon = 'add-outline',
  sizeIcon = wp(13),
  colorIcon = '#ffffff',
  onPress = undefined,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, customStyles]}>
      <Ionicons name={nameIcon} color={colorIcon} size={sizeIcon} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
