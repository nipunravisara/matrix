import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetStarted from '../screens/GetStarted';

type NavigatorProps = {
  initialScreen: keyof RootStackParamList | undefined;
};

export type RootStackParamList = {
  GetStarted: undefined;
  Showcase: undefined;
  HeaderDemo: undefined;
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
    </Stack.Navigator>
  );
}
