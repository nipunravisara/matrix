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
}

export default function MListItem(props: TMListItem) {
  console.log(props);

  //   const theme = useTheme();
  const {title, subtitle, caption, prefix} = props;

  return (
    <View style={MListItemStyles(props).container}>
      {prefix}
      <View style={MListItemStyles(props).cardContentContainer}>
        <View style={MListItemStyles(props).cardTitleContainer}>
          <MLabel content={title} type={MLabelVariations.l2} />
          <MText content={caption as string} type={MTextVariant.p4} />
        </View>
        <View>
          <MText content={subtitle as string} type={MTextVariant.p4} />
        </View>
      </View>
    </View>
  );
}
