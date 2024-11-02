import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './Screen/Landing';
import Rive1 from './Screen/Rive1';
import Rive2 from './Screen/Rive2';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Landing: undefined;
  Rive1: undefined;
  Rive2: undefined;
};

export const screens: {
  name: string;
  screen: any;
}[] = [
  {
    name: 'Rive 1',
    screen: 'Rive1',
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
        <Stack.Screen name="Rive1" component={Rive1} />
        <Stack.Screen name="Rive2" component={Rive2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
