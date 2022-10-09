import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetStarted from '../screens/GetStarted';
import TextShowcase from '../screens/showcase/TextShowcase';

type NavigatorProps = {
  initialScreen: keyof RootStackParamList | undefined;
};

export type RootStackParamList = {
  GetStarted: undefined;
  Showcase: undefined;
  TextShowcase: undefined;
  TitleDemo: undefined;
  ButtonDemo: undefined;
  IconDemo: undefined;
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
    </Stack.Navigator>
  );
}
