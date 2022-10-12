import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import MIcon from '../MIcon/MIcon';
import MLabel from '../MLabel/MLabel';
import {MHeaderStyles} from './getHeaderStyles';

export interface TMHeader {
  title: string;
  left?: JSX.Element | 'goBack';
  right?: JSX.Element[];
  bottomLine?: boolean;
  styles?: ViewStyle;
  titleStyles?: TextStyle;
}

export default function MHeader(props: TMHeader) {
  const {title, left, right, titleStyles} = props;

  return (
    <View style={MHeaderStyles(props).container}>
      <View style={MHeaderStyles(props).leftContainer}>
        {left === 'goBack' ? <MIcon name="chevronLeft" /> : left}
      </View>
      <View style={MHeaderStyles(props).leftContainer}>
        <MLabel content={title} styles={titleStyles} />
      </View>
      <View style={MHeaderStyles(props).rightContainer}>
        {right?.map((element) => element)}
      </View>
    </View>
  );
}
