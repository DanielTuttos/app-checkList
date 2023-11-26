import React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './styles';
import { colors } from '../../theme';
import { InputTextProps } from '../../interfaces/components/inputText';

const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  label,
  customStyle,
  multiline = false,
  numberOfLine = 1,
  editable = false
}) => {
  return (
    <TextInput
      label={label}
      mode="outlined"
      multiline={multiline}
      numberOfLines={numberOfLine}
      value={value}
      onChangeText={newText => onChange(newText)}
      style={[styles.container, customStyle]}
      scrollEnabled
      outlineColor={colors.primary}
      selectionColor={colors.primary}
      activeOutlineColor={colors.primary}
      outlineStyle={{
        borderWidth: 2
      }}
      editable={editable}
    />
  );
};

export default InputText;
