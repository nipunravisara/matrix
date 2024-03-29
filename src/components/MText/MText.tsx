import React from 'react';
import {Text, TextStyle} from 'react-native';
import useTheme from '../../theme/useTheme';
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
  content: string | undefined;
  styles?: TextStyle;
}

export default function MText(props: TMText): JSX.Element {
  const theme = useTheme();
  const {type, content, styles} = props;

  return <Text style={[getTextStyles(type, theme), styles]}>{content}</Text>;
}
