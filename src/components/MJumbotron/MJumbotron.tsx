import React from 'react';
import {View, ViewStyle} from 'react-native';
import {MLabel, MText, MTitle} from '../..';
import {MJumbotronStyles} from './getJumbotronStyles';

export enum MJumbotronAlignment {
  left,
  center,
  right,
}

export enum MJumbotronSizes {
  large,
  medium,
  small,
}

export interface TMJumbotron {
  title: string;
  description?: string;
  overline?: string;
  alignment?: MJumbotronAlignment;
  size?: MJumbotronSizes;
  styles?: ViewStyle;
}

export default function MJumbotron(props: TMJumbotron) {
  const {title, description, overline} = props;

  return (
    <View style={MJumbotronStyles(props).container}>
      {overline && (
        <MLabel
          content={overline}
          type={MJumbotronStyles(props).sizes?.label}
        ></MLabel>
      )}
      {title && (
        <MTitle
          content={title}
          type={MJumbotronStyles(props).sizes?.title}
        ></MTitle>
      )}
      {description && (
        <MText
          content={description}
          styles={MJumbotronStyles(props).description}
          type={MJumbotronStyles(props).sizes?.text}
        />
      )}
    </View>
  );
}
