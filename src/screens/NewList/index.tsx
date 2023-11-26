import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {InputText, ScreenComponent} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NewListScreenNavigationProp,
  NewListScreenRouteProp,
} from '../../interfaces/screen/NewList';
import {styles} from './styles';

const NewList = () => {
  const route = useRoute<NewListScreenRouteProp>();
  const {
    params: {item},
  } = route;
  const navigation = useNavigation<NewListScreenNavigationProp>();
  console.log('navgation: ', navigation, item);
  const [description, setDescription] = useState(item ? item.description || '' : '');
  const [title, setTitle] = useState(item ? item.title : '');
  const [isEditable, setIsEditable] = useState(item ? false : true)

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
      </View>
    </ScreenComponent>
  );
};

export default NewList;
