import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: wp(1.5),
    right: wp(1.5),
    width: wp(15.5),
    height: wp(15.5),
    backgroundColor: colors.primary,
    borderRadius: wp(50),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});
