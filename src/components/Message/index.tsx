import React from 'react';
import {Image, Text, View} from 'react-native';
import {MessageProps} from '../../interfaces/components/message';
import {styles} from './styles';
import {NoData} from '../../assets';

export const Message: React.FC<MessageProps> = ({text}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={NoData} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
