// Import Screens
import * as React from 'react';

import contactScreen from '../container/contactScreen';
import mainScreen from '../container/mainScreen/';

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
          <Stack.Screen name="mainScreen" component={mainScreen} />
          <Stack.Screen name="contactScreen" component={contactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
