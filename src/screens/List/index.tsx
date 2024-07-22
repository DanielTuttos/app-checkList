import React, {useCallback, useState} from 'react';
import {View, FlatList} from 'react-native';
import {deleteById, getLists, updateFieldDB} from '../../services';
import {useDBContext} from '../../context/DBContext';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {
  CardGroup,
  FloatingButton,
  Message,
  ScreenComponent,
} from '../../components';
import {styles} from './styles';
import {ListScreenNavigationProp, Lists} from '../../interfaces/screen/Lists';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {messageToast} from '../../helpers';
import {Text} from 'react-native-paper';

const List = () => {
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
      const data: Lists[] = await getLists(db, 'group');
      setDataList(data);
    } catch (error) {
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
      await updateFieldDB(db, 'group', value ? 1 : 0, 'is_fav', id);
      getList();
    } catch (error) {
      messageToast({
        type: 'error',
        text1: 'Error al actualizar el grupo',
      });
    }
  };

  return (
    <ScreenComponent title="Lista">
      <View style={styles.container}>
        {dataList.length === 0 ? (
          <Message text="No existen datos guardados." />
        ) : (
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
        )}
        <FloatingButton onPress={() => navigation.navigate('NewList', {})} />
      </View>
    </ScreenComponent>
  );
};

export default List;
