import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Buttons, InputText, ScreenComponent} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NewListScreenNavigationProp,
  NewListScreenRouteProp,
} from '../../interfaces/screen/NewList';
import {styles} from './styles';
import {useDBContext} from '../../context/DBContext';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {insertList} from '../../services';
import Toast from 'react-native-toast-message';

const NewList = () => {
  const route = useRoute<NewListScreenRouteProp>();
  const {
    params: {item},
  } = route;
  const navigation = useNavigation<NewListScreenNavigationProp>();
  console.log('navgation: ', navigation, item);
  const [description, setDescription] = useState(
    item ? item.description || '' : '',
  );
  const [title, setTitle] = useState(item ? item.title : '');
  const [isEditable, setIsEditable] = useState(item ? false : true);

  const editData = item ? true : false;

  const db = useDBContext() as SQLiteDatabase;

  const createList = async () => {
    try {
      if (!title) {
        return Toast.show({
          type: 'error',
          text1: 'Hello',
          text2: 'This is some something 👋',
        });
      }
      const data = await insertList(db, title, description);
      console.log('data: ', data);
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
          label="Título"
          onChange={value => setTitle(value)}
          value={title}
          editable={isEditable}
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
          onPress={() => (editData ? console.log('editar') : createList())}
          nameIcon={editData ? 'create-outline' : 'save-outline'}
        />
      </View>
    </ScreenComponent>
  );
};

export default NewList;
