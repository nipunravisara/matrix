import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {GetIcon} from './../../assets/icons/getIcon';
import {MIconButtonStyles} from './getIconButtonStyles';

export enum MIconButtonVariations {
  Primary,
  Secondary,
}

export interface TMIconButton {
  iconName: string;
  color?: string;
  type?: MIconButtonVariations;
  onPress?: () => void;
  styles?: ViewStyle;
}

export default function MIconButton(props: TMIconButton) {
  const {iconName, color, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={MIconButtonStyles(props).container}
    >
      {GetIcon({iconName, color})}
    </TouchableOpacity>
  );
}
