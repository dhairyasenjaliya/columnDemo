import React from 'react';
import {
  PermissionsAndroid,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
} from 'react-native';
import styles from './styles';
import ScreenHeader from '../../components/headerComponent';
import {GradientColors} from '../../constants/globalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {request, PERMISSIONS} from 'react-native-permissions';

interface IProps {
  navigation: Object;
}
// Global Level Props To Identify Data Coming From Previos Screen

const MainScreen: React.FC<IProps> = ({navigation}) => {
  // Check Contact Permission
  const checkContactAccessOrNot = async () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept',
      }).then(data => {
        if (data === 'granted') {
          navigation.navigate('contactScreen');
        } else {
          Alert.alert(
            'Open Setting',
            'Please Allow Permisson To Read Contact',
            [
              {
                text: 'Not Now',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Go To Setting', onPress: () => Linking.openSettings()},
            ],
          );
        }
      });
    } else {
      request(PERMISSIONS.IOS.CONTACTS).then(result => {
        if (result === 'granted') {
          navigation.navigate('contactScreen');
        } else {
          Alert.alert(
            'Open Setting',
            'Please Allow Permisson To Read Contact',
            [
              {
                text: 'Not Now',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Go To Setting', onPress: () => Linking.openSettings()},
            ],
          );
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Global Screen Header */}
      <ScreenHeader title={'Column'} />
      {/* Global Screen Header End */}
      <View style={styles.buttonPos}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('contactScreen');
            checkContactAccessOrNot();
          }}>
          <LinearGradient
            colors={GradientColors.buttonGradient}
            style={styles.accessContactButton}>
            <Text style={styles.accessButtonText}>
              {'View All My Contacts'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MainScreen;
