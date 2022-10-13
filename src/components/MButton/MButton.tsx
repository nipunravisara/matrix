import React, {useState} from 'react';
import {TouchableHighlight, View, ViewStyle} from 'react-native';
import MIcon from '../MIcon/MIcon';
import MLabel from '../MLabel/MLabel';
import {MButtonStyles} from './getButtonStyles';

export enum MButtonVariations {
  primary,
  secondary,
  ternary,
}
export interface TMButton {
  title?: string;
  type?: MButtonVariations;
  expanded?: boolean;
  styles?: ViewStyle;
  prefix?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export default function MButton(props: TMButton) {
  const [pressed, setPressed] = useState(false);
  const {
    title,
    styles,
    prefix,
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
      <View style={MButtonStyles(props).innerContainer}>
        {prefix && (
          <MIcon
            name={prefix}
            color={
              pressed
                ? MButtonStyles(props).labelPressed.color
                : MButtonStyles(props).label.color
            }
          />
        )}
        <View style={{width: 4}} />
        <MLabel
          content={title || ''}
          styles={
            pressed
              ? MButtonStyles(props).labelPressed
              : MButtonStyles(props).label
          }
        />
      </View>
    </TouchableHighlight>
  );
}
