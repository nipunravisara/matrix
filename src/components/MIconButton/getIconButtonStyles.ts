import {ColorValue, StyleSheet, TextStyle} from 'react-native';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import {MIconButtonVariations, TMIconButton} from './MIconButton';

export default function getIconButtonStyles(
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
  console.log(props);

  return StyleSheet.create({
    container: {
      height: 72,
      width: 72,
      borderRadius: 1000,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.ColorPrimaryPrimaryColor,
    },
  });
};
