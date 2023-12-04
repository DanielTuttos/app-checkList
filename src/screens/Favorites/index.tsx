import React, {useState, useCallback} from 'react';
import {Text, View, FlatList} from 'react-native';
import { CardGroup, FloatingButton, ScreenComponent } from '../../components';
import { styles } from './styles';
import { useDBContext } from '../../context/DBContext';
import { SQLiteDatabase } from 'react-native-sqlite-storage';
import { ListScreenNavigationProp, Lists } from '../../interfaces/screen/Lists';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { deleteById, getLists, updateFieldDB } from '../../services';
import { messageToast } from '../../helpers';

const Favorites = () => {
  const db = useDBContext() as SQLiteDatabase;

  const [dataList, setDataList] = useState<Lists[]>([]);

  const navigation = useNavigation<ListScreenNavigationProp>();

  useFocusEffect(
    useCallback(() => {
      getList();
    }, []),
  );

  const getList = async () => {
    try {
      const data: Lists[] = await getLists(db, 'group', true, 'is_fav', 1);
      console.log('favoritos')
      setDataList(data);
    } catch (error) {
      console.log('error favoritos: ', error)
      messageToast({
        type: 'error',
        text1: 'Error al obtener la lista de grupos',
      });
    }
  };

  const deleteCard = async (id: number) => {
    try {
      await deleteById(db, 'group', id);
      getList();
    } catch (error) {
      messageToast({
        type: 'error',
        text1: 'Error al eliminar el grupo',
      });
    }
  };

  const addFavotire = async (id: number, value: boolean) => {
    try {
      await updateFieldDB(db, 'group', value, 'is_fav', id);
      getList();
    } catch (error) {
      messageToast({
        type: 'error',
        text1: 'Error al actualizar el grupo',
      });
    }
  };
  return (
    <ScreenComponent title="Favoritos">
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={dataList}
          renderItem={({item}) => {
            return (
              <CardGroup
                key={item.id}
                item={item}
                navigation={navigation}
                deleteCard={deleteCard}
                addFavotire={addFavotire}
              />
            );
          }}
        />
        <FloatingButton onPress={() => navigation.navigate('NewList', {fromFav: true})} />
      </View>
    </ScreenComponent>
  );
};

export default Favorites;
