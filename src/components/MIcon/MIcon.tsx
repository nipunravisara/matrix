import React from 'react';
import {View, ViewStyle} from 'react-native';
import {GetIcon} from './../../assets/icons/getIcon';

export interface TMIcon {
  iconName: string;
  color?: string;
  type?: string;
  styles?: ViewStyle;
}

export default function MIcon(props: TMIcon) {
  const {iconName, color, styles} = props;

  return (
    <View style={[{alignSelf: 'flex-start'}, styles]}>
      {GetIcon({iconName, iconColor: color})}
    </View>
  );
}
