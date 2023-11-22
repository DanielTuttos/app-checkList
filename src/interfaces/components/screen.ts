import {ReactNode} from 'react';

export interface ScreenProps {
  title: string;
  children: ReactNode;
  goBack?: () => void;
}
