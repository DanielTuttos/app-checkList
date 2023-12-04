import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CardItemProps} from '../../interfaces/components/cardItem';
import {styles} from './styles';
import FloatingButton from '../FloatingButton';
import {colors} from '../../theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CheckBox from '../CheckBox';

const CardItem: React.FC<CardItemProps> = ({item}) => {
  // console.log('otems: ', item);
  return (
    <TouchableOpacity
      onPress={() => console.log('marcando como leido')}
      style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox />
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
      </View>
      <FloatingButton
        onPress={() => console.log('eliminando item')}
        nameIcon={'trash-outline'}
        sizeIcon={wp(6)}
        colorIcon={colors.primary}
        customStyles={styles.buttonAction}
      />
    </TouchableOpacity>
  );
};

export default CardItem;
