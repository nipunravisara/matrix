import React from 'react';
import {ArrowExpand, Eye, NoPreview} from '../../assets/icons';
import ChevronLeft from '../../assets/icons/ChevronLeft';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';

interface TGetIcon {
  name: string;
  color?: string;
}

function getIconColor(
  color: string | undefined,
  isDark: Pick<TTheme, 'isDark'>['isDark']
): string {
  if (color) {
    return color;
  } else if (isDark) {
    return '#fff';
  }
  return '#000';
}

export const GetIcon = (props: TGetIcon): JSX.Element => {
  const {isDark} = useTheme();
  const {name, color} = props;

  switch (name) {
    case 'arrowExpand':
      return <ArrowExpand color={getIconColor(color, isDark)} />;
    case 'chevronLeft':
      return <ChevronLeft color={getIconColor(color, isDark)} />;
    case 'eye':
      return <Eye color={getIconColor(color, isDark)} />;
    case 'noPreview':
      return <NoPreview color={getIconColor(color, isDark)} />;
    default:
      return <ArrowExpand color={getIconColor(color, isDark)} />;
  }
};
