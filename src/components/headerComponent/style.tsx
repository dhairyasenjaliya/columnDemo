import {StyleSheet, Platform} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';

export default StyleSheet.create({
  headerText: {
    fontSize: scale(20),
    alignSelf: 'center',
    color: Colors.perlWhite,
    fontFamily: Fonts.helveticaNeueMedium,
  },
  backContain: {
    backgroundColor: Colors.headerColor,
    height: verticalScale(50),
    justifyContent: 'center',
  },
});
