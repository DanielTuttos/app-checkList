import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/Navigator";
import { RouteProp } from "@react-navigation/native";

export type NewListScreenNavigationProp = StackNavigationProp<RootStackParams, 'NewList'>;
export type NewListScreenRouteProp = RouteProp<RootStackParams, 'NewList'>