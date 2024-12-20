import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './Screen/Landing';
import Page1 from './Screen/Page1';
import Rive2 from './Screen/Rive2';
import {
  LDProvider,
  ReactNativeLDClient,
} from '@launchdarkly/react-native-client-sdk';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Landing: undefined;
  Page1: undefined;
  Rive2: undefined;
};

export const screens: {
  name: string;
  screen: any;
}[] = [
  {
    name: 'Page 1',
    screen: 'Page1',
  },
  {
    name: 'Rive 2',
    screen: 'Rive2',
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Rive2" component={Rive2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
