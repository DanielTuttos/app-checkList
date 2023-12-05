import {StyleSheet} from 'react-native';
import {colors, text} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
  },
  header: {
    backgroundColor: colors.backgroundPrimary,
    height: hp(6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,

    elevation: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: wp(1.5)
  },
  iconContainer: {
    minWidth: wp(7.5),
  },
  title: {
    fontSize: text.title,
    fontWeight: '700',
    marginLeft: wp(1),
    color: colors.textPrimary
  }
});
