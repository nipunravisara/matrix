import React, { useState } from 'react';
import { TouchableHighlight, ViewStyle } from 'react-native';
import MLabel from '../MLabel/MLabel';
import { MButtonStyles } from './getButtonStyles';

export enum MButtonVariations {
  primary,
  secondary,
  ternary,
}
export interface TMButton {
  title?: string;
  type?: MButtonVariations;
  styles?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
}

export default function MButton(props: TMButton) {
  const [pressed, setPressed] = useState(false);
  const {
    title,
    styles,
    onPress = () => console.log('Pressed!'),
    disabled,
  } = props;

  return (
    <TouchableHighlight
      disabled={disabled}
      underlayColor={MButtonStyles(props).containerPressed.color}
      style={[MButtonStyles(props).container, styles]}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <MLabel
        content={title || ''}
        styles={
          pressed
            ? MButtonStyles(props).labelPressed
            : MButtonStyles(props).label
        }
      />
    </TouchableHighlight>
  );
}
