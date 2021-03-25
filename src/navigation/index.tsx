import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Define All Screen

import MainScreen from '../container/mainScreen';
import ContactScreen from '../container/contactScreen';
import ContactInfoScreen from '../container/contactInfoScreen';

// Define End

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
          <Stack.Screen
            name="contactInfoScreen"
            component={ContactInfoScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
