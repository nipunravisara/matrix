import {StyleSheet} from 'react-native';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import {MDividerVariations, TMDivider} from './MDivider';

function getDividerBorderSize(type: Pick<TMDivider, 'type'>['type']): number {
  switch (type) {
    case MDividerVariations.Liner:
      return 0.5;
    case MDividerVariations.Section:
      return 1;
    default:
      return 0;
  }
}

function getDividerSize(type: Pick<TMDivider, 'type'>['type']): number {
  switch (type) {
    case MDividerVariations.Liner:
      return 1;
    default:
      return 16;
  }
}

function getDividerColor(
  type: Pick<TMDivider, 'type'>['type'],
  colors: Pick<TTheme, 'colors'>['colors'],
  isDark: Pick<TTheme, 'isDark'>['isDark']
): string {
  if (type === MDividerVariations.Section && isDark) {
    return colors.ColorBorderBorderInverseSecondary;
  } else if (type === MDividerVariations.Section && !isDark) {
    return colors.ColorBorderBorderSecondary;
  } else if (isDark) {
    return colors.ColorSurfaceInversePrimary;
  }
  return colors.ColorSurfacePrimary;
}

function getDividerBorderColor(
  type: Pick<TMDivider, 'type'>['type'],
  colors: Pick<TTheme, 'colors'>['colors'],
  isDark: Pick<TTheme, 'isDark'>['isDark']
): string {
  if (type === MDividerVariations.Section && isDark) {
    return colors.ColorBorderBorderInverseSecondary;
  } else if (type === MDividerVariations.Section && !isDark) {
    return colors.ColorBorderBorderSecondary;
  } else if (type === MDividerVariations.Liner && isDark) {
    return colors.ColorBorderBorderInversePrimary;
  } else if (type === MDividerVariations.Liner && !isDark) {
    return colors.ColorBorderBorderPrimary;
  } else if (isDark) {
    return colors.ColorSurfaceInversePrimary;
  }
  return colors.ColorSurfacePrimary;
}

export const MDividerStyles = (props: TMDivider) => {
  const {isDark, colors} = useTheme();
  const {type, size} = props;

  const dividerStyles = {
    borderTopColor: getDividerBorderColor(type, colors, isDark),
    borderTopWidth: getDividerBorderSize(type),
    height: size ? size : getDividerSize(type),
    backgroundColor: getDividerColor(type, colors, isDark),
  };

  return StyleSheet.create({
    divider: {
      ...dividerStyles,
    },
  });
};
