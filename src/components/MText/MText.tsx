import React from 'react';
import {Text, TextStyle} from 'react-native';
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
  styles?: TextStyle;
}

export default function MText(props: TMText): JSX.Element {
  const {type, content, styles} = props;

  return <Text style={[getTextStyles(type), styles]}>{content}</Text>;
}
