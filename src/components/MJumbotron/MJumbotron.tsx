import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

export enum MJumbotronAlignment {
  Left,
  Center,
  Right,
}

export enum MJumbotronSizes {
  Large,
  Medium,
  Small,
}

export interface TMJumbotron {
  title: string;
  description?: string;
  overline?: string;
  alignment?: MJumbotronAlignment;
  size?: MJumbotronSizes;
  styles?: ViewStyle;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MJumbotron(_props: TMJumbotron) {
  return (
    <View>
      <Text>MJumbotron</Text>
    </View>
  );
}
