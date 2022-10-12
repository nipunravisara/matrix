import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import MIcon from '../MIcon/MIcon';
import MLabel from '../MLabel/MLabel';
import MText, {MTextVariant} from '../MText/MText';
import {MHeaderStyles} from './getHeaderStyles';

export interface TMHeader {
  title: string;
  subTitle?: string;
  titleAlignment?: 'left' | 'center' | 'right';
  left?: JSX.Element | 'goBack';
  right?: JSX.Element[];
  bottomLine?: boolean;
  styles?: ViewStyle;
  titleStyles?: TextStyle;
  subTitleStyles?: TextStyle;
}

export default function MHeader(props: TMHeader) {
  const {title, subTitle, left, right, titleStyles, subTitleStyles} = props;

  return (
    <View style={MHeaderStyles(props).container}>
      <View style={MHeaderStyles(props).leftContainer}>
        {left === 'goBack' ? <MIcon name="chevronLeft" /> : left}
      </View>
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
      <View style={MHeaderStyles(props).rightContainer}>
        {right?.map((element) => element)}
      </View>
    </View>
  );
}
