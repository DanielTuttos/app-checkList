import { StyleSheet, Button } from 'react-native';
import {colors, text} from '../../theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { hexToRgb } from '../../helpers';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: wp(3),
    marginHorizontal: wp(2),
    marginTop: wp(1.5),
    marginBottom: wp(1.5),
    borderRadius: wp(2),
  },
  title: {
    fontSize: text.subtitle,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  date: {
    fontSize: text.info,
    textAlign: 'right',
  },
  buttonsActions: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    width: wp(20),
    justifyContent: 'space-between'
  },
  buttonAction: {
    margin: 0,
    padding: 0,
    position: 'relative',
    backgroundColor: `${hexToRgb(colors.primary, 0.1)}`,
    maxWidth: wp(9),
    height: wp(9),
    bottom: 0,
    right: 0,
  },
});
