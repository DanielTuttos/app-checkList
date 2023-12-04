import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {hexToRgb} from '../../helpers';
import {colors, text} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: wp(3),
    // marginHorizontal: wp(2),
    marginTop: wp(1.5),
    marginBottom: wp(1.5),
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: text.subtitle,
    fontWeight: '700',
    color: colors.textPrimary,
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
