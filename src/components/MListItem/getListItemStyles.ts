import {ColorValue, StyleSheet} from 'react-native';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import type {TMListItem} from './MListItem';

function getBorderBottomColor(
  isDark: Pick<TTheme, 'isDark'>['isDark'],
  colors: Pick<TTheme, 'colors'>['colors'],
  divider: Pick<TMListItem, 'divider'>['divider']
): string {
  if (divider && isDark) {
    return colors.ColorSurfaceInverseTertiary;
  } else if (divider && !isDark) {
    return colors.ColorBorderBorderPrimary;
  } else {
    return '#0000';
  }
}

export const MListItemStyles = ({
  prefix,
  divider,
  options,
  styles,
}: TMListItem) => {
  const {isDark, colors} = useTheme();

  const containerStyles = {
    height: 82,
    paddingLeft: prefix ? 0 : 16,
    paddingRight: (options?.length as number) >= 0 ? 0 : 16,
    borderBottomColor: getBorderBottomColor(isDark, colors, divider),
    backgroundColor: isDark
      ? (colors.ColorSurfaceInversePrimary as ColorValue)
      : (colors.ColorSurfacePrimary as ColorValue),
  };

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 0.5,
      ...containerStyles,
      ...styles,
    },
    innerContainer: {
      flexDirection: 'row',
    },
    cardContentContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    cardTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
