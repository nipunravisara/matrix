import type {ColorValue, TextStyle} from 'react-native';
import type {TTheme} from '../../theme/theme';
import {MTitleVariant} from './Mtitle';

export default function getTextStyles(
  type: MTitleVariant | undefined,
  theme: TTheme
): TextStyle {
  const {isDark, colors, typography} = theme;

  let textStyles = {
    color: isDark
      ? (colors.ColorTextInversePrimary as ColorValue)
      : (colors.ColorTextPrimary as ColorValue),
  };

  switch (type) {
    case MTitleVariant.h1:
      textStyles = {
        ...textStyles,
        ...typography.TypographyHeadingHeading1,
      };
      break;
    case MTitleVariant.h2:
      textStyles = {
        ...textStyles,
        ...typography.TypographyHeadingHeading2,
      };
      break;
    case MTitleVariant.h3:
      textStyles = {
        ...textStyles,
        ...typography.TypographyHeadingHeading3,
      };
      break;
    case MTitleVariant.h4:
      textStyles = {
        ...textStyles,
        ...typography.TypographyHeadingHeading4,
      };
      break;
    case MTitleVariant.h5:
      textStyles = {
        ...textStyles,
        ...typography.TypographyHeadingHeading5,
      };
      break;
    default:
      textStyles = {
        ...textStyles,
        ...typography.TypographyHeadingHeading3,
      };
      break;
  }

  return textStyles;
}
