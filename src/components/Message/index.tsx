import React from 'react';
import {Text, View} from 'react-native';
import {MessageProps} from '../../interfaces/components/message';
import NoDataIcon from '../../assets/NoData';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles';

export const Message: React.FC<MessageProps> = ({text}) => {
  return (
    <View style={styles.mainContainer}>
      <NoDataIcon width={wp(60)} height={wp(60)} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
