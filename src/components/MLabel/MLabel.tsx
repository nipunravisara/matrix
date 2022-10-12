import React from 'react';
import {Text, TextStyle} from 'react-native';
import useTheme from '../../theme/useTheme';
import getLabelStyles from './getLabelStyles';

export enum MLabelVariations {
  l1,
  l2,
  l3,
  l4,
  l5,
}

export interface TMLabel {
  content: string;
  type?: MLabelVariations;
  styles?: TextStyle;
}

export default function MLabel(props: TMLabel) {
  const theme = useTheme();
  const {content, type, styles} = props;

  return <Text style={[getLabelStyles(type, theme), styles]}>{content}</Text>;
}
