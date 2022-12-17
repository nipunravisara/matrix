import React from 'react';
import {TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import MIcon from '../MIcon/MIcon';
import MLabel from '../MLabel/MLabel';
import MText, {MTextVariant} from '../MText/MText';
import {MHeaderStyles} from './getHeaderStyles';

export interface TMHeader {
  title: string;
  subTitle?: string;
  titleStyles?: TextStyle;
  subTitleStyles?: TextStyle;
  titleAlignment?: 'left' | 'center' | 'right';
  left?: JSX.Element | 'goBack';
  leftPress?: () => void;
  right?: JSX.Element[];
  rightPress?: () => void;
  bottomLine?: boolean;
  styles?: ViewStyle;
}

export default function MHeader(props: TMHeader) {
  const {
    title,
    subTitle,
    left,
    right,
    leftPress,
    rightPress,
    titleAlignment,
    titleStyles,
    subTitleStyles,
  } = props;

  return (
    <View style={MHeaderStyles(props).container}>
      {titleAlignment !== 'left' && (
        <View style={MHeaderStyles(props).leftContainer}>
          {left === 'goBack' ? (
            <TouchableOpacity onPress={leftPress}>
              <MIcon name="chevronLeft" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={leftPress}>{left}</TouchableOpacity>
          )}
        </View>
      )}
      <View style={MHeaderStyles(props).titleContainer}>
        <MLabel content={title} styles={titleStyles} />
        {subTitle && (
          <MText
            content={subTitle}
            type={MTextVariant.p3}
            styles={subTitleStyles}
          />
        )}
      </View>
      {titleAlignment !== 'right' && (
        <View style={MHeaderStyles(props).rightContainer}>
          {right?.map((element) => element)}
        </View>
      )}
    </View>
  );
}
