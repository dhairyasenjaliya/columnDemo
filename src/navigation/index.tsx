// Import Screens
import * as React from 'react';

import ContactScreen from '../container/contactScreen';
import MainScreen from '../container/mainScreen/';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class Navigator extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="mainScreen" component={MainScreen} />
          <Stack.Screen name="contactScreen" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
