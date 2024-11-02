import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './Screen/Landing';
import Rive2 from './Screen/Rive2';
import Rive3 from './Screen/Rive3';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Landing: undefined;
  Starter: {data: string};
  Payment: undefined;
  Rive: undefined;
  Rive2: undefined;
  Rive3: undefined;
};

export const screens: {
  name: string;
  screen: any;
}[] = [
  {
    name: 'Rive 2',
    screen: 'Rive2',
  },
  {
    name: 'Rive 3',
    screen: 'Rive3',
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Rive2" component={Rive2} />
        <Stack.Screen name="Rive3" component={Rive3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
