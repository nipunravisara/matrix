import React from 'react';
import {View} from 'react-native';
import {MDividerStyles} from './getDividerStyles';

export enum MDividerVariations {
  Liner,
  Section,
}

export interface TMDivider {
  type?: MDividerVariations;
  size?: number;
}

export default function MDivider(props: TMDivider) {
  return <View style={MDividerStyles(props).divider} />;
}
