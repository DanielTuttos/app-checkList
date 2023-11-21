import { ViewStyle } from "react-native";

export interface FloatingButtonProps {
  customStyles?: ViewStyle,
  nameIcon?: string,
  sizeIcon?: number,
  colorIcon?: string,
  onPress: () => void
}