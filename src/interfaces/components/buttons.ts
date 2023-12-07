import { ViewStyle } from "react-native";

export interface ButtonsProps {
  label: string,
  nameIcon?: string;
  onPress: () => void;
  customStyle?: ViewStyle;
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  colorText?: string;
}