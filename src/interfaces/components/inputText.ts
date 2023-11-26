import {ViewStyle} from 'react-native';

export interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  customStyle?: ViewStyle;
  multiline?: boolean;
  numberOfLine?: number;
  editable?: boolean;
}
