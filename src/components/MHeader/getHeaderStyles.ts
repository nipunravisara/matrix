import {ColorValue, FlexAlignType, StyleSheet} from 'react-native';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import type {TMHeader} from './MHeader';

function getTitleAlignment(
  titleAlignment: Pick<TMHeader, 'titleAlignment'>['titleAlignment']
): FlexAlignType {
  switch (titleAlignment) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
}

function getBorderBottomColor(
  isDark: Pick<TTheme, 'isDark'>['isDark'],
  colors: Pick<TTheme, 'colors'>['colors'],
  bottomLine: Pick<TMHeader, 'bottomLine'>['bottomLine']
): string {
  if (bottomLine && isDark) {
    return colors.ColorSurfaceInverseTertiary;
  } else if (bottomLine && !isDark) {
    return colors.ColorBorderBorderPrimary;
  } else {
    return colors.ColorBorderBorderPrimary;
  }
}

export const MHeaderStyles = ({
  bottomLine,
  titleAlignment,
  styles,
}: TMHeader) => {
  const {isDark, colors} = useTheme();

  const containerStyles = {
    backgroundColor: isDark
      ? (colors.ColorSurfaceInversePrimary as ColorValue)
      : (colors.ColorSurfacePrimary as ColorValue),
    borderBottomColor: getBorderBottomColor(isDark, colors, bottomLine),
  };

  //ColorSurfaceInverseSecondary

  return StyleSheet.create({
    container: {
      height: 56,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: bottomLine ? 0.5 : 0,
      ...containerStyles,
      ...styles,
    },
    leftContainer: {
      flex: 1,
      paddingLeft: 16,
      alignItems: 'flex-start',
    },
    titleContainer: {
      flex: 1,
      paddingLeft: 16,
      alignItems: getTitleAlignment(titleAlignment),
    },
    rightContainer: {
      flex: 1,
      paddingRight: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });
};
