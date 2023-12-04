import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),

  },
  textArea: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    minHeight: 100,
  },
});
