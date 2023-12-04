import { ListScreenNavigationProp, Lists } from "../screen/Lists";

export interface CardGroupProps {
    item: Lists;
    navigation: ListScreenNavigationProp;
    deleteCard: (id: number) => void;
    addFavotire: (id: number, value: boolean) => void;
}