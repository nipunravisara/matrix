import React, {ReactChild} from 'react';
import {TouchableHighlight, View, ViewStyle} from 'react-native';
import {useTheme} from '../..';
import MText from '../MText/MText';
import {MButtonStyles} from './getRadioButtonStyles';

export interface TMRadioButton {
  onPress: () => void;
  styles?: ViewStyle;
  selected?: boolean;
  label?: string;
}

export interface TMRadioButtonGroup {
  list: ReactChild[];
  onPress: () => void;
  value?: boolean;
  styles?: ViewStyle;
}

export default function MRadioButton(props: TMRadioButton) {
  const {label, onPress, styles} = props;
  const {colors, isDark} = useTheme();

  return (
    <View style={[MButtonStyles(props).container, styles]}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={
          isDark
            ? colors.ColorSurfaceInverseSecondary
            : colors.ColorSurfaceSecondary
        }
        style={MButtonStyles(props).radioButtonFrame}
        onPress={onPress}
      >
        <View style={MButtonStyles(props).radioButtonFill} />
      </TouchableHighlight>
      <MText content={label} styles={MButtonStyles(props).radioButtonLabel} />
    </View>
  );
}
