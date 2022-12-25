import {StyleSheet} from 'react-native';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import {MDividerVariations, TMDivider} from './MDivider';

function getDividerBorder(type: Pick<TMDivider, 'type'>['type']): number {
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
  if (type === MDividerVariations.Section) {
    return colors.ColorBorderBorderSecondary;
  } else if (isDark) {
    return colors.ColorSurfaceInversePrimary;
  } else {
    return colors.ColorSurfacePrimary;
  }
}

export const MDividerStyles = (props: TMDivider) => {
  const {isDark, colors} = useTheme();
  const {type, size} = props;

  const dividerStyles = {
    borderTopWidth: getDividerBorder(type),
    height: size ? size : getDividerSize(type),
    backgroundColor: getDividerColor(type, colors, isDark),
  };

  return StyleSheet.create({
    divider: {
      borderTopColor: colors.ColorBorderBorderPrimary,
      ...dividerStyles,
    },
  });
};
