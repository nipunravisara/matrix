import { StyleSheet } from 'react-native';
import type { TTheme } from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import { MButtonVariations, TMButton } from './MButton';

function getButtonColor(
  colors: Pick<TTheme, 'colors'>,
  type: MButtonVariations,
  disabled: boolean
): string {
  if (disabled && type !== MButtonVariations.ternary) {
    return colors.colors.ColorSurfaceTeritary;
  }

  switch (type) {
    case MButtonVariations.primary:
      return colors.colors.ColorAllBlueBlue600;
    case MButtonVariations.secondary:
      return colors.colors.ColorStatePressed50;
    case MButtonVariations.ternary:
      return `${colors.colors.ColorAllBaseWhite}00`;
    default:
      return colors.colors.ColorAllBlueBlue600;
  }
}

function getButtonPressedColor(
  colors: Pick<TTheme, 'colors'>,
  type: MButtonVariations
): string {
  switch (type) {
    case MButtonVariations.primary:
      return colors.colors.ColorAllBlueBlue900;
    case MButtonVariations.secondary:
      return colors.colors.ColorAllBlueBlue900;
    case MButtonVariations.ternary:
      return `${colors.colors.ColorStatePressed50}00`;
    default:
      return colors.colors.ColorAllBlueBlue900;
  }
}

function getButtonLabelColor(
  colors: Pick<TTheme, 'colors'>,
  type: MButtonVariations,
  disabled: boolean
): string {
  if (disabled) {
    return colors.colors.ColorTextTertiary;
  }

  switch (type) {
    case MButtonVariations.primary:
      return colors.colors.ColorTextInversePrimary;
    case MButtonVariations.secondary:
      return colors.colors.ColorAllPrimaryPrimary600;
    case MButtonVariations.ternary:
      return colors.colors.ColorAllPrimaryPrimary600;
    default:
      return colors.colors.ColorTextInversePrimary;
  }
}

function getButtonLabelPressedColor(
  colors: Pick<TTheme, 'colors'>,
  type: MButtonVariations
): string {
  switch (type) {
    case MButtonVariations.primary:
      return colors.colors.ColorTextInversePrimary;
    case MButtonVariations.secondary:
      return colors.colors.ColorTextInversePrimary;
    case MButtonVariations.ternary:
      return colors.colors.ColorAllPrimaryPrimary900;
    default:
      return colors.colors.ColorTextInversePrimary;
  }
}

export const MButtonStyles = ({ type, disabled = false }: TMButton) => {
  const { colors, roundness } = useTheme();

  return StyleSheet.create({
    container: {
      height: 48,
      padding: 10,
      borderRadius: roundness,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getButtonColor(
        { colors },
        type || MButtonVariations.primary,
        disabled
      ),
    },
    containerPressed: {
      color: getButtonPressedColor(
        { colors },
        type || MButtonVariations.primary
      ),
    },
    label: {
      color: getButtonLabelColor(
        { colors },
        type || MButtonVariations.primary,
        disabled
      ),
    },
    labelPressed: {
      color: getButtonLabelPressedColor(
        { colors },
        type || MButtonVariations.primary
      ),
    },
  });
};
