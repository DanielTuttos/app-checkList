import React, {ReactNode, JSX} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

interface ScreenProps {
  title: string;
  children: ReactNode;
  goBack?: () => void;
}

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
    <View style={styles.container}>
      {getHeader()}
      {children}
    </View>
  );
};

export default ScreenComponent;
