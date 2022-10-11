import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetStarted from '../screens/GetStarted';
import TextShowcase from '../screens/showcase/TextShowcase';
import TitleShowcase from '../screens/showcase/TitleShowcase';
import IconShowcase from '../screens/showcase/IconShowcase';
import ButtonShowcase from '../screens/showcase/ButtonShowcase';

type NavigatorProps = {
  initialScreen: keyof RootStackParamList | undefined;
};

export type RootStackParamList = {
  GetStarted: undefined;
  Showcase: undefined;
  TextShowcase: undefined;
  TitleShowcase: undefined;
  IconShowcase: undefined;
  ButtonShowcase: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigator({
  initialScreen,
}: NavigatorProps): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialScreen}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="TextShowcase" component={TextShowcase} />
      <Stack.Screen name="TitleShowcase" component={TitleShowcase} />
      <Stack.Screen name="IconShowcase" component={IconShowcase} />
      <Stack.Screen name="ButtonShowcase" component={ButtonShowcase} />
    </Stack.Navigator>
  );
}
