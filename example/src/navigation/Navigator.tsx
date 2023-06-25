import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import GetStarted from '../screens/GetStarted';
import ButtonShowcase from '../screens/showcase/ButtonShowcase';
import DividerShowcase from '../screens/showcase/DividerShowcase';
import HeaderShowcase from '../screens/showcase/HeaderShowcase';
import IconButtonShowcase from '../screens/showcase/IconButtonShowcase';
import IconShowcase from '../screens/showcase/IconShowcase';
import JumbotronShowcase from '../screens/showcase/JumbotronShowcase';
import LabelShowcase from '../screens/showcase/LabelShowcase';
import ListItemShowcase from '../screens/showcase/ListItemShowcase';
import ModalShowcase from '../screens/showcase/ModalShowcase';
import RadioButtonShowcase from '../screens/showcase/RadioButtonShowcase';
import Showcase from '../screens/showcase/Showcase';
import TextInputShowcase from '../screens/showcase/TextInputShowcase';
import TextShowcase from '../screens/showcase/TextShowcase';
import TitleShowcase from '../screens/showcase/TitleShowcase';

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
  JumbotronShowcase: undefined;
  RadioButtonShowcase: undefined;
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
      initialRouteName={'RadioButtonShowcase'}
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
      <Stack.Screen name="JumbotronShowcase" component={JumbotronShowcase} />
      <Stack.Screen
        name="RadioButtonShowcase"
        component={RadioButtonShowcase}
      />
    </Stack.Navigator>
  );
}
