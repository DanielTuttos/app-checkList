import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginVertical: wp(1.5),
    marginBottom: wp(5)
  },
});