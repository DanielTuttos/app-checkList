import {StyleSheet} from 'react-native';
import {colors, text} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  text: {
    color: colors.textPrimary,
    fontSize: text.title,
    fontWeight: 'bold',
  },
});
