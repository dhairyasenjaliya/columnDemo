import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

interface IProps {
  appTheme: Object;
  navigation: Object;
}

interface IState {
  index: Number;
}

class contactScreen extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  //   componentDidMount() {}

  render() {
    return (
      <View>
        <Text>Contact Screen</Text>
      </View>
    );
  }
}

export default contactScreen;
