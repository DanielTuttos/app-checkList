import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigator/Navigator';
import {RouteProp} from '@react-navigation/native';
import {Lists} from './Lists';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

export type NewListScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'NewList'
>;
export type NewListScreenRouteProp = RouteProp<RootStackParams, 'NewList'>;

export interface AddItemsProps {
  dataList: Lists;
  db: SQLiteDatabase;
}

export interface Items {
  id: number;
  title: string;
  created_at: string;
  id_group: number;
  ischeck: boolean;
}
