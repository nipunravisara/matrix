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
    return colors.ColorBorderBorderPrimary;
  }
}

export const MListItemStyles = ({divider, styles}: TMListItem) => {
  const {isDark, colors} = useTheme();

  const containerStyles = {
    backgroundColor: isDark
      ? (colors.ColorSurfaceInversePrimary as ColorValue)
      : (colors.ColorSurfacePrimary as ColorValue),
    borderBottomColor: getBorderBottomColor(isDark, colors, divider),
  };

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderBottomWidth: 0.2,
      ...containerStyles,
      ...styles,
    },
    cardContentContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingRight: 18,
    },
    cardTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
