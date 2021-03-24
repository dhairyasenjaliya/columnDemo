import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,

  // PermissionsAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientColors, DefaultImage} from '../../constants/globalStyles';

import styles from './style';

const DisplayContactInfo = (props: any) => {
  const {data} = props;
  const {
    givenName,
    familyName,
    phoneNumbers,
    hasThumbnail,
    email,
    thumbnailPath,
  } = data;
  let checkImage = thumbnailPath
    ? {uri: thumbnailPath}
    : DefaultImage.userDefault;
  return (
    <View>
      <Image
        style={{height: 80, width: 80, borderRadius: 100}}
        source={checkImage}
      />
      <Text>{givenName + familyName}</Text>
    </View>
  );
};

export default DisplayContactInfo;
