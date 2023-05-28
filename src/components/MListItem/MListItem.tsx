import React from 'react';
import {TouchableHighlight, View, ViewStyle} from 'react-native';
import useTheme from '../../theme/useTheme';
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
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function MListItem(props: TMListItem) {
  const {colors} = useTheme();
  const {title, subtitle, caption, options, prefix, onPress, onLongPress} =
    props;

  return (
    <TouchableHighlight
      activeOpacity={0.4}
      underlayColor={colors.ColorAllPrimaryPrimary50}
      style={MListItemStyles(props).container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View style={MListItemStyles(props).innerContainer}>
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
    </TouchableHighlight>
  );
}
