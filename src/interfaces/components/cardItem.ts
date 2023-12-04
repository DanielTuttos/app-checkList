import {Items} from '../screen/NewList';

export interface CardItemProps {
  item: Items;
  updateCheck: (id: number, value: boolean) => void;
  deleteItem: (id: number) => void;
}
