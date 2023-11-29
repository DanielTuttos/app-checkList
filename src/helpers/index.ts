import Toast from 'react-native-toast-message';

export const hexToRgb = (hex: string, opacity: number) => {
  // Eliminar el símbolo # si está presente
  hex = hex.replace(/^#/, '');
  // Convertir a valores RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Devolver los componentes RGB
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

interface messageToastProps {
  type: 'error' | 'success' | 'info';
  text1: string;
  text2?: string;
  position?: 'top' | 'bottom';
  visibilityTime?: number;
}

export const messageToast = ({
  type,
  text1,
  text2,
  position = 'top',
  visibilityTime = 2000,
}: messageToastProps) => {
  Toast.show({
    type,
    text1,
    text2,
    position,
    visibilityTime,
  });
};
