import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Modal} from 'react-native-paper';
import {Buttons, FloatingButton, InputText} from '../../../components';
import {styles} from './styles';
import {AddItemsProps} from '../../../interfaces/screen/NewList';
import {messageToast} from '../../../helpers';

const AddItems: React.FC<AddItemsProps> = ({item}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toogleModal = () => setModalOpen(prevState => !prevState);
  const [title, setTitle] = useState('');

  const handlePressSave = () => {
    if (!title) {
      messageToast({
        type: 'error',
        text1: 'El campo título no debe ser vacío.',
      });
      return;
    }
  };

  return (
    <>
      <Text style={styles.textTitle} numberOfLines={1}>
        Check List "{item.title}"
      </Text>
      <FloatingButton onPress={toogleModal} />
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
