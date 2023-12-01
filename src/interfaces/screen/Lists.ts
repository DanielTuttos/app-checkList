import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/Navigator";

export interface Lists {
  id: number;
  title: string;
  created_at: string;
  is_fav: boolean;
}

export type ListScreenNavigationProp = StackNavigationProp<RootStackParams, 'List'>;