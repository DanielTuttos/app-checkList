import {StyleSheet} from 'react-native';
import {colors, text} from '../../theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
  image: {
    width: wp(60),
    height: wp(60),
  },
});
