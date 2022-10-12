import type {ColorValue, TextStyle} from 'react-native';
import useTheme from '../../theme/useTheme';
import {MTextVariant} from './MText';

export default function getTextStyles(
  type: MTextVariant | undefined
): TextStyle {
  const {isDark, colors, typography} = useTheme();

  let textStyles = {
    color: isDark
      ? (colors.ColorTextInversePrimary as ColorValue)
      : (colors.ColorTextPrimary as ColorValue),
  };

  switch (type) {
    case MTextVariant.p1:
      textStyles = {
        ...textStyles,
        ...typography.TypographyParagraphParagraph1,
      };
      break;
    case MTextVariant.p2:
      textStyles = {
        ...textStyles,
        ...typography.TypographyParagraphParagraph2,
      };
      break;
    case MTextVariant.p3:
      textStyles = {
        ...textStyles,
        ...typography.TypographyParagraphParagraph3,
      };
      break;
    case MTextVariant.p4:
      textStyles = {
        ...textStyles,
        ...typography.TypographyParagraphParagraph4,
      };
      break;
    case MTextVariant.p5:
      textStyles = {
        ...textStyles,
        ...typography.TypographyParagraphParagraph5,
      };
      break;
    default:
      textStyles = {
        ...textStyles,
        ...typography.TypographyParagraphParagraph2,
      };
      break;
  }

  return textStyles;
}
