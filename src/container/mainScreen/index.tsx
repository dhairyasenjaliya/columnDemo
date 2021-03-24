import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

interface IProps {
  appTheme: Object;
  navigation: Object;
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
        <Text>MainScreen</Text>
        <Button onPress={() => {}} title={'View All My Contacts'} />
      </View>
    );
  }
}

export default mainScreen;
