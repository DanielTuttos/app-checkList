import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './styles';
import {colors} from '../../theme';
import {InputTextProps} from '../../interfaces/components/inputText';

const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  label,
  customStyle,
  multiline = false,
  numberOfLine = 1,
  editable = true,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <TextInput
      onFocus={() => setIsFocus(true)}
      label={isFocus ? label : ''}
      placeholder={label}
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
      placeholderTextColor={colors.textSecondary}
      outlineStyle={{
        borderWidth: 2,
      }}
      textColor={colors.textPrimary}
      editable={editable}
    />
  );
};

export default InputText;
