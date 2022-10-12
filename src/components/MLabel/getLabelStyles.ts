import type {ColorValue, TextStyle} from 'react-native';
import type {TTheme} from '../../theme/theme';
import {MLabelVariations} from './MLabel';

export default function getLabelStyles(
  type: MLabelVariations | undefined,
  theme: TTheme
): TextStyle {
  const {isDark, colors, typography} = theme;

  let textStyles = {
    color: isDark
      ? (colors.ColorTextInversePrimary as ColorValue)
      : (colors.ColorTextPrimary as ColorValue),
  };

  switch (type) {
    case MLabelVariations.l1:
      textStyles = {
        ...textStyles,
        ...typography.TypographyLabelLabel1,
      };
      break;
    case MLabelVariations.l2:
      textStyles = {
        ...textStyles,
        ...typography.TypographyLabelLabel2,
      };
      break;
    case MLabelVariations.l3:
      textStyles = {
        ...textStyles,
        ...typography.TypographyLabelLabel3,
      };
      break;
    case MLabelVariations.l4:
      textStyles = {
        ...textStyles,
        ...typography.TypographyLabelLabel4,
      };
      break;
    case MLabelVariations.l5:
      textStyles = {
        ...textStyles,
        ...typography.TypographyLabelLabel5,
      };
      break;
    default:
      textStyles = {
        ...textStyles,
        ...typography.TypographyLabelLabel2,
      };
      break;
  }

  return textStyles;
}
