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
import IconButtonShowcase from '../screens/showcase/IconButtonShowcase';
import ListItemShowcase from '../screens/showcase/ListItemShowcase';
import ModalShowcase from '../screens/showcase/ModalShowcase';
import DividerShowcase from '../screens/showcase/DividerShowcase';

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
  IconButtonShowcase: undefined;
  LabelShowcase: undefined;
  HeaderShowcase: undefined;
  TextInputShowcase: undefined;
  ListItemShowcase: undefined;
  ModalShowcase: undefined;
  DividerShowcase: undefined;
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
      <Stack.Screen name="IconButtonShowcase" component={IconButtonShowcase} />
      <Stack.Screen name="LabelShowcase" component={LabelShowcase} />
      <Stack.Screen name="ButtonShowcase" component={ButtonShowcase} />
      <Stack.Screen name="HeaderShowcase" component={HeaderShowcase} />
      <Stack.Screen name="TextInputShowcase" component={TextInputShowcase} />
      <Stack.Screen name="ListItemShowcase" component={ListItemShowcase} />
      <Stack.Screen name="ModalShowcase" component={ModalShowcase} />
      <Stack.Screen name="DividerShowcase" component={DividerShowcase} />
    </Stack.Navigator>
  );
}
