import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Modal} from 'react-native-paper';
import {
  Buttons,
  CardItem,
  FloatingButton,
  InputText,
} from '../../../components';
import {styles} from './styles';
import {AddItemsProps, Items} from '../../../interfaces/screen/NewList';
import {messageToast} from '../../../helpers';
import {getLists, insertItem, updateFieldDB, deleteById} from '../../../services';

const AddItems: React.FC<AddItemsProps> = ({dataList, db}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toogleModal = () => setModalOpen(prevState => !prevState);
  const [title, setTitle] = useState('');

  const [items, setItems] = useState<Items[]>();

  useEffect(() => {
    getListItems();
  }, []);

  const handlePressSave = async () => {
    try {
      if (!title) {
        messageToast({
          type: 'error',
          text1: 'El campo título no debe ser vacío.',
        });
        return;
      }
      const dataInsert = await insertItem(db, title, dataList.id);
      if (dataInsert.length > 0 && dataInsert[0].insertId) {
        getListItems();
        toogleModal();
        setTitle('');
      }
    } catch (error) {
      console.log('error: ', {error});
      messageToast({
        type: 'error',
        text1: 'Error al guardar el item',
      });
    }
  };

  const getListItems = async () => {
    try {
      const data: Items[] = await getLists(
        db,
        'lists',
        true,
        'id_group',
        dataList.id,
      );
      setItems(data);
    } catch (error) {
      console.log('error: ', {error});
      messageToast({
        type: 'error',
        text1: 'Error al obtener los items',
      });
    }
  };

  const updateCheck = async (id: number, value: boolean) => {
    try {
      await updateFieldDB(db, 'lists', value, 'ischeck', id);
      getListItems();
    } catch (error) {
      messageToast({
        type: 'error',
        text1: 'Error al actualizar el item',
      });
    }
  };

  const deleteItem = async (id: number) => {
    try {
      await deleteById(db, 'lists', id);
      getListItems();
    } catch (error) {
      messageToast({
        type: 'error',
        text1: 'Error al eliminar el item',
      });
    }
  };

  return (
    <>
      <Text style={styles.textTitle} numberOfLines={1}>
        Check List "{dataList.title}"
      </Text>
      <FloatingButton onPress={toogleModal} />
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({item}) => {
          return (
            <CardItem
              item={item}
              updateCheck={updateCheck}
              deleteItem={deleteItem}
            />
          );
        }}
      />
      <Modal
        visible={modalOpen}
        onDismiss={toogleModal}
        contentContainerStyle={styles.containerModal}>
        <Text style={styles.textTitle}>Nuevo Item</Text>
        <InputText
          label="Título *"
          onChange={value => setTitle(value)}
          value={title}
        />
        <View style={styles.buttons}>
          <Buttons
            label="Cancelar"
            onPress={toogleModal}
            nameIcon="close-circle-outline"
            customStyle={styles.customButtonCancel}
            mode={'outlined'}
          />
          <Buttons
            label="Guardar"
            onPress={handlePressSave}
            nameIcon="save-outline"
          />
        </View>
      </Modal>
    </>
  );
};

export default AddItems;
