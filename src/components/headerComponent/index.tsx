import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  // PermissionsAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientColors} from '../../constants/globalStyles';

import styles from './style';

const ScreenHeader = (props: any) => {
  const {title} = props;
  return (
    <LinearGradient
      colors={GradientColors.whiteGradient}
      style={styles.backContain}>
      <Text style={styles.headerText}>{title}</Text>
    </LinearGradient>
  );
};

export default ScreenHeader;
