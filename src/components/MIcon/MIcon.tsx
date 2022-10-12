import React from 'react';
import {View, ViewStyle} from 'react-native';
import getIcon from './getIcon';

export interface TMIcon {
  name: string;
  color?: string;
  type?: string;
  styles?: ViewStyle;
}

export default function MIcon(props: TMIcon) {
  const {name, color, styles} = props;

  return (
    <View style={[{alignSelf: 'flex-start'}, styles]}>
      {getIcon(name, color)}
    </View>
  );
}
