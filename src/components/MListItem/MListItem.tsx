import React from 'react';
import {View, ViewStyle} from 'react-native';
import MLabel, {MLabelVariations} from '../MLabel/MLabel';
import MText, {MTextVariant} from '../MText/MText';
import {MListItemStyles} from './getListItemStyles';

export interface TMListItem {
  title: string;
  subtitle?: string;
  caption?: string;
  prefix?: JSX.Element;
  styles?: ViewStyle;
  divider?: boolean;
  options?: JSX.Element[];
}

export default function MListItem(props: TMListItem) {
  const {title, subtitle, caption, options, prefix} = props;

  return (
    <View style={MListItemStyles(props).container}>
      {prefix}
      <View style={MListItemStyles(props).cardContentContainer}>
        <View style={MListItemStyles(props).cardTitleContainer}>
          <MLabel content={title} type={MLabelVariations.l2} />
          {!options && (
            <MText content={caption as string} type={MTextVariant.p4} />
          )}
        </View>
        <View>
          <MText content={subtitle as string} type={MTextVariant.p4} />
        </View>
      </View>
      {options && options.map((option: JSX.Element) => option)}
    </View>
  );
}
