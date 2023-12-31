import {StyleSheet} from 'react-native';
import {colors, text} from '../../theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    marginBottom: wp(3),
    maxHeight: wp(25),
    fontSize: text.subtitle,
    backgroundColor: colors.secondary,
    color: colors.primary
  },
});
