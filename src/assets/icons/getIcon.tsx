import React from 'react';
import {ArrowExpand, Eye, NoPreview} from '../../assets/icons';
import ChevronLeft from '../../assets/icons/ChevronLeft';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';

interface TGetIcon {
  iconName: string;
  iconColor?: string;
}

function getIconColor(
  iconColor: string | undefined,
  isDark: Pick<TTheme, 'isDark'>['isDark']
): string {
  if (iconColor) {
    return iconColor;
  } else if (isDark) {
    return '#fff';
  }
  return '#000';
}

export const GetIcon = (props: TGetIcon): JSX.Element => {
  const {isDark} = useTheme();
  const {iconName, iconColor} = props;

  switch (iconName) {
    case 'arrowExpand':
      return <ArrowExpand color={getIconColor(iconColor, isDark)} />;
    case 'chevronLeft':
      return <ChevronLeft color={getIconColor(iconColor, isDark)} />;
    case 'eye':
      return <Eye color={getIconColor(iconColor, isDark)} />;
    case 'noPreview':
      return <NoPreview color={getIconColor(iconColor, isDark)} />;
    default:
      return <ArrowExpand color={getIconColor(iconColor, isDark)} />;
  }
};
