import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import GetStarted from '../screens/GetStarted';
import TextShowcase from '../screens/showcase/TextShowcase';
import TitleShowcase from '../screens/showcase/TitleShowcase';
import IconShowcase from '../screens/showcase/IconShowcase';
import ButtonShowcase from '../screens/showcase/ButtonShowcase';
import LabelShowcase from '../screens/showcase/LabelShowcase';
import HeaderShowcase from '../screens/showcase/HeaderShowcase';
import Showcase from '../screens/showcase/Showcase';
import TextInputShowcase from '../screens/showcase/TextInputShowcase';

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
  LabelShowcase: undefined;
  HeaderShowcase: undefined;
  TextInputShowcase: undefined;
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
      <Stack.Screen name="Showcase" component={Showcase} />
      <Stack.Screen name="TextShowcase" component={TextShowcase} />
      <Stack.Screen name="TitleShowcase" component={TitleShowcase} />
      <Stack.Screen name="IconShowcase" component={IconShowcase} />
      <Stack.Screen name="LabelShowcase" component={LabelShowcase} />
      <Stack.Screen name="ButtonShowcase" component={ButtonShowcase} />
      <Stack.Screen name="HeaderShowcase" component={HeaderShowcase} />
      <Stack.Screen name="TextInputShowcase" component={TextInputShowcase} />
    </Stack.Navigator>
  );
}
