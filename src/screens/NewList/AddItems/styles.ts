import {StyleSheet} from 'react-native';
import {colors, text} from '../../../theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  textTitle: {
    fontSize: text.title,
    fontWeight: '600',
    color: colors.textPrimary,
    paddingBottom: wp(3),
  },
  containerModal: {
    backgroundColor: colors.backgroundPrimary,
    padding: 20,
    zIndex: 100,
    margin: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  customButtonCancel: {
    backgroundColor: colors.backgroundTertiary,
    borderColor: colors.backgroundTertiary,
  },
});
