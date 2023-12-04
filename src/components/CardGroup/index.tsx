import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CardGroupProps} from '../../interfaces/components/cardGroup';
import {styles} from './styles';
import {colors} from '../../theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FloatingButton from '../FloatingButton';

const CardGroup: React.FC<CardGroupProps> = ({
  item,
  navigation,
  deleteCard,
  addFavotire,
}) => {
  const openCard = () => {
    navigation.navigate('NewList', {item});
  };

  return (
    <TouchableOpacity onPress={openCard} style={styles.container}>
      <View>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.date}>{item.created_at}</Text>
      </View>
      <View style={styles.buttonsActions}>
        <FloatingButton
          onPress={() => addFavotire(item.id, item.is_fav ? false : true)}
          nameIcon={item.is_fav ? 'star' : 'star-outline'}
          sizeIcon={wp(6)}
          colorIcon={colors.primary}
          customStyles={styles.buttonAction}
        />
        <FloatingButton
          onPress={() => deleteCard(item.id)}
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
