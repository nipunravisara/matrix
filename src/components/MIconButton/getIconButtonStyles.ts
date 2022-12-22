import {ColorValue, StyleSheet, TextStyle} from 'react-native';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import {
  MIconButtonSize,
  MIconButtonVariations,
  TMIconButton,
} from './MIconButton';

function getIconButtonType(
  colors: Pick<TTheme, 'colors'>['colors'],
  type?: MIconButtonVariations,
  color?: string
) {
  if (color) {
    return color;
  } else if (type === MIconButtonVariations.Primary) {
    return colors.ColorPrimaryPrimaryColor;
  } else {
    return '#0000';
  }
}

function getIconButtonSize(size?: MIconButtonSize) {
  switch (size) {
    case MIconButtonSize.Large:
      return 92;
    case MIconButtonSize.Small:
      return 52;
    default:
      return 72;
  }
}

export default function getIconButtonColor(
  type: MIconButtonVariations | undefined,
  theme: TTheme
): TextStyle {
  const {isDark, colors} = theme;

  let iconButtonStyles = {
    color: isDark
      ? (colors.ColorTextInversePrimary as ColorValue)
      : (colors.ColorTextPrimary as ColorValue),
  };

  switch (type) {
    case MIconButtonVariations.Secondary:
      iconButtonStyles = {
        ...iconButtonStyles,
      };
      break;
    default:
      iconButtonStyles = {
        ...iconButtonStyles,
      };
      break;
  }

  return iconButtonStyles;
}

export const MIconButtonStyles = (props: TMIconButton) => {
  const {colors} = useTheme();
  const {size, color, type} = props;

  const iconButtonStyles = {
    height: getIconButtonSize(size),
    width: getIconButtonSize(size),
  };

  return StyleSheet.create({
    container: {
      borderRadius: 1000,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getIconButtonType(colors, type, color),
      ...iconButtonStyles,
    },
  });
};
