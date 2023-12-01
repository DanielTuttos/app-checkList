import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Buttons, InputText, ScreenComponent} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NewListScreenNavigationProp,
  NewListScreenRouteProp,
} from '../../interfaces/screen/NewList';
import {styles} from './styles';
import {useDBContext} from '../../context/DBContext';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {getInformationById, insertList} from '../../services';
import Toast from 'react-native-toast-message';
import {messageToast} from '../../helpers';
import {Lists} from '../../interfaces/screen/Lists';
import {Text} from 'react-native-paper';
import AddItems from './AddItems';

const NewList = () => {
  const route = useRoute<NewListScreenRouteProp>();
  const {
    params: {item},
  } = route;
  const navigation = useNavigation<NewListScreenNavigationProp>();
  const [title, setTitle] = useState(item ? item.title : '');

  const isSaved = item ? true : false;

  const db = useDBContext() as SQLiteDatabase;

  const createList = async () => {
    try {
      if (!title) {
        messageToast({
          type: 'error',
          text1: 'El campo título no debe ser vacío.',
        });
        return;
      }
      const data = await insertList(db, title);
      if (data.length > 0) {
        const {insertId} = data[0];
        const itemData: Lists = await getInformationById(db, 'group', insertId);
        navigation.setParams({item: itemData});
        messageToast({type: 'success', text1: 'Guardado correctamente.'});
      }
    } catch (error) {
      console.log('error; ', {error});
    }
  };

  return (
    <ScreenComponent
      title={item ? item.title : 'Nueva lista'}
      goBack={() => navigation.goBack()}>
      <View style={styles.container}>
        {!isSaved ? (
          <>
            <InputText
              label="Título *"
              onChange={value => setTitle(value)}
              value={title}
            />
            <Buttons
              label={'Guardar'}
              onPress={() => createList()}
              nameIcon={'save-outline'}
            />
          </>
        ) : (
          <AddItems item={item ? item : ({} as Lists)} />
        )}
      </View>
    </ScreenComponent>
  );
};

export default NewList;
