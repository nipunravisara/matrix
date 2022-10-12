import React from 'react';
import {Text, TextStyle} from 'react-native';
import useTheme from '../../theme/useTheme';
import getTextStyles from './getTitleStyles';

export enum MTitleVariant {
  h1,
  h2,
  h3,
  h4,
  h5,
}

export interface TMtitle {
  type?: MTitleVariant;
  content: string;
  styles?: TextStyle;
}

export default function Mtitle(props: TMtitle) {
  const theme = useTheme();
  const {type, content, styles} = props;

  return <Text style={[getTextStyles(type, theme), styles]}>{content}</Text>;
}
