import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Colors} from '../../constants/globalStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  accessContactButton: {
    height: verticalScale(50),
    width: '50%',
    backgroundColor: Colors.accessButtonColor,
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  accessButtonText: {
    fontSize: scale(14),
    color: Colors.perlWhite,
  },
  buttonPos: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
