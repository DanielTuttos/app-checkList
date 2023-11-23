import React, {JSX} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {ScreenProps} from '../../interfaces/components/screen';

const ScreenComponent: React.FC<ScreenProps> = props => {
  const {children, title, goBack} = props;

  const getHeader = (): JSX.Element => {
    return (
      <View style={styles.header}>
        {goBack && (
          <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
            <Ionicons name="arrow-back-outline" size={25} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {getHeader()}
      {children}
    </SafeAreaView>
  );
};

export default ScreenComponent;
