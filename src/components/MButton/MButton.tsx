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
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  onPress?: (data?: any) => void;
  disabled?: boolean;
}

export default function MButton(props: TMButton) {
  const [pressed, setPressed] = useState(false);
  const {
    title,
    styles,
    prefix,
    suffix,
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
      <>
        <View style={MButtonStyles(props).leftContainer} />
        <View style={MButtonStyles(props).titleContainer}>
          <View style={MButtonStyles(props).innerContainer}>
            {prefix && typeof prefix === 'string' ? (
              <>
                <MIcon
                  name={prefix}
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
                name={suffix}
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
    // <TouchableHighlight
    //   disabled={disabled}
    //   underlayColor={MButtonStyles(props).containerPressed.color}
    //   style={[MButtonStyles(props).container, styles]}
    //   onPress={onPress}
    //   onPressIn={() => setPressed(true)}
    //   onPressOut={() => setPressed(false)}
    // >
    //   <View style={MButtonStyles(props).innerContainer}>
    //     {prefix && typeof prefix === 'string' ? (
    //       <>
    //         <MIcon
    //           name={prefix}
    //           color={
    //             pressed
    //               ? MButtonStyles(props).labelPressed.color
    //               : MButtonStyles(props).label.color
    //           }
    //         />
    //         <View style={{width: 4}} />
    //       </>
    //     ) : (
    //       prefix
    //     )}
    //     <MLabel
    //       content={title || ''}
    //       styles={
    //         pressed
    //           ? MButtonStyles(props).labelPressed
    //           : MButtonStyles(props).label
    //       }
    //     />
    //     {suffix && typeof suffix === 'string' ? (
    //       <>
    //         <View style={{width: 4}} />
    //         <MIcon
    //           name={suffix}
    //           color={
    //             pressed
    //               ? MButtonStyles(props).labelPressed.color
    //               : MButtonStyles(props).label.color
    //           }
    //         />
    //       </>
    //     ) : (
    //       suffix
    //     )}
    //   </View>
    // </TouchableHighlight>
  );
}
