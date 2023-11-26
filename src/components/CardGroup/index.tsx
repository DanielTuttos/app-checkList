import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CardGroupProps} from '../../interfaces/components/cardGroup';
import {styles} from './styles';
import {colors} from '../../theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FloatingButton from '../FloatingButton';

const CardGroup: React.FC<CardGroupProps> = ({item, navigation}) => {
  const openCard = () => {
    navigation.navigate('NewList', {item});
  };
  const addFavotire = () => {
    console.log('add favorite: ', item.id);
  };
  const deleteCard = () => {
    console.log('delete: ', item.id);
  };
  return (
    <TouchableOpacity onPress={openCard} style={styles.container}>
      <View>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
        <Text style={styles.date}>{item.created_at}</Text>
      </View>
      <View style={styles.buttonsActions}>
        <FloatingButton
          onPress={addFavotire}
          nameIcon={item.is_fav ? 'star' : 'star-outline'}
          sizeIcon={wp(6)}
          colorIcon={colors.primary}
          customStyles={styles.buttonAction}
        />
        <FloatingButton
          onPress={deleteCard}
          nameIcon={'trash-outline'}
          sizeIcon={wp(6)}
          colorIcon={colors.primary}
          customStyles={styles.buttonAction}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardGroup;
