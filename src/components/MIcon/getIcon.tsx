import React from 'react';
import { ArrowExpand } from '../../assets/icons';
import ChevronLeft from '../../assets/icons/ChevronLeft';
import useTheme from '../../theme/useTheme';

function getIconColor(color: string | undefined): string {
  const { isDark } = useTheme();

  if (color) {
    return color;
  } else if (isDark) {
    return '#fff';
  }
  return '#000';
}

export default function getIcon(iconName: string, color?: string): JSX.Element {
  switch (iconName) {
    case 'arrowExpand':
      return <ArrowExpand color={getIconColor(color)} />;
    case 'chevronLeft':
      return <ChevronLeft color={getIconColor(color)} />;
    default:
      return <ArrowExpand color={getIconColor(color)} />;
  }
}
