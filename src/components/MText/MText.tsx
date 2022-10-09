import React from 'react';
import { Text } from 'react-native';
import getTextStyles from './getTextStyles';

export enum MTextVariant {
  p1,
  p2,
  p3,
  p4,
  p5,
}

export interface TMText {
  type?: MTextVariant;
  content: string;
}

export default function MText(props: TMText): JSX.Element {
  const { type, content } = props;

  return <Text style={[getTextStyles(type)]}>{content}</Text>;
}
