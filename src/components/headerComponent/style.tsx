import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';

export default StyleSheet.create({
  headerText: {
    fontSize: scale(20),
    alignSelf: 'center',
    color: Colors.carbonBlack,
    fontFamily: Fonts.helveticaNeueMedium,
  },
  backContain: {
    height: verticalScale(50),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 20,
    borderBottomLeftRadius: scale(15),
    borderBottomRightRadius: scale(15),
  },
});
