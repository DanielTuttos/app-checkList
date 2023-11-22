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
