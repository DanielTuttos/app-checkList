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

const NewList = () => {
  const route = useRoute<NewListScreenRouteProp>();
  const {
    params: {item},
  } = route;
  const navigation = useNavigation<NewListScreenNavigationProp>();
  // console.log('navgation: ', navigation, item);
  const [description, setDescription] = useState(
    item ? item.description || '' : '',
  );
  const [title, setTitle] = useState(item ? item.title : '');
  const [isEditable, setIsEditable] = useState(item ? false : true);

  const editData = item ? true : false;

  useEffect(() => {
    setIsEditable(item ? false : true);
  }, [item]);

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
      const data = await insertList(db, title, description);
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
        <InputText
          label="Título *"
          onChange={value => setTitle(value)}
          value={title}
          editable={isEditable}
          // customStyle={{
          //   backgroundColor: editData ? 'grey' : '#ffffff',
          // }}
        />
        <InputText
          label="Descripcion"
          onChange={value => setDescription(value)}
          value={description}
          multiline
          numberOfLine={4}
          editable={isEditable}
        />
        <Buttons
          label={editData ? 'Editar' : 'Guardar'}
          onPress={() => (editData ? setIsEditable(true) : createList())}
          nameIcon={editData ? 'create-outline' : 'save-outline'}
        />
      </View>
    </ScreenComponent>
  );
};

export default NewList;
