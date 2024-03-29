import React, {useState} from 'react';
import {TouchableHighlight, View, ViewStyle} from 'react-native';
import {getTestID} from '../../utils/getTestId';
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
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  disabled?: boolean;
  onPress?: (data?: any) => void;
  onLongPress?: (data?: any) => void;
  testId?: string;
}

export default function MButton(props: TMButton) {
  const [pressed, setPressed] = useState(false);
  const {
    title,
    styles,
    prefix,
    suffix,
    disabled,
    onPress = () => console.log('Pressed!'),
    onLongPress = () => console.log('Long pressed!'),
    testId,
  } = props;

  return (
    <TouchableHighlight
      testID={getTestID({
        component: MButton.name,
        type: props.type || MButtonVariations.primary,
        testId: testId,
      })}
      underlayColor={MButtonStyles(props).containerPressed.color}
      style={[MButtonStyles(props).container, styles]}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled}
    >
      <>
        <View style={MButtonStyles(props).leftContainer} />
        <View style={MButtonStyles(props).titleContainer}>
          <View style={MButtonStyles(props).innerContainer}>
            {prefix && typeof prefix === 'string' ? (
              <>
                <MIcon
                  iconName={prefix}
                  color={
                    pressed
                      ? MButtonStyles(props).labelPressed.color
                      : MButtonStyles(props).label.color
                  }
                />
                <View style={{width: 4}} />
              </>
            ) : (
              prefix
            )}
            <MLabel
              content={title || ''}
              styles={
                pressed
                  ? MButtonStyles(props).labelPressed
                  : MButtonStyles(props).label
              }
            />
          </View>
        </View>
        <View style={MButtonStyles(props).rightContainer}>
          {suffix && typeof suffix === 'string' ? (
            <>
              <MIcon
                iconName={suffix}
                color={
                  pressed
                    ? MButtonStyles(props).labelPressed.color
                    : MButtonStyles(props).label.color
                }
              />
            </>
          ) : (
            suffix
          )}
        </View>
      </>
    </TouchableHighlight>
  );
}
