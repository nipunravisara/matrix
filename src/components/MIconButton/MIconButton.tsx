import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {GetIcon} from './../../assets/icons/getIcon';
import {MIconButtonStyles} from './getIconButtonStyles';

export enum MIconButtonVariations {
  Primary,
  Secondary,
}

export enum MIconButtonSize {
  Large,
  Medium,
  Small,
}

export interface TMIconButton {
  iconName: string;
  color?: string;
  iconColor?: string;
  type?: MIconButtonVariations;
  size?: MIconButtonSize;
  onPress?: () => void;
  styles?: ViewStyle;
}

export default function MIconButton(props: TMIconButton) {
  const {iconName, iconColor, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={MIconButtonStyles(props).container}
    >
      {GetIcon({iconName, iconColor})}
    </TouchableOpacity>
  );
}
