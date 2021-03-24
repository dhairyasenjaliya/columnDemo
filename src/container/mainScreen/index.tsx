import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ScreenHeader from '../../components/headerComponent';
import {GradientColors} from '../../constants/globalStyles';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
  // appTheme: Object;
  // navigation: Object;
}

interface IState {
  index: Number;
}

class mainScreen extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader title={'Column'} />
        <View style={styles.buttonPos}>
          <LinearGradient
            colors={GradientColors.buttonGradient}
            style={styles.accessContactButton}>
            <TouchableOpacity>
              <Text
                style={styles.accessButtonText}>{`View All My Contacts`}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

export default mainScreen;
