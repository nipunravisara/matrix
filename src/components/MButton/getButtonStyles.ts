import { StyleSheet } from 'react-native';
import useTheme from '../../theme/useTheme';
import { MButtonVariations, TMButton } from './MButton';

function getButtonColor(type: MButtonVariations, disabled: boolean): string {
  const { colors } = useTheme();
  if (disabled && type !== MButtonVariations.ternary) {
    return colors.ColorSurfaceTeritary;
  }

  switch (type) {
    case MButtonVariations.primary:
      return colors.ColorAllBlueBlue600;
    case MButtonVariations.secondary:
      return colors.ColorStatePressed50;
    case MButtonVariations.ternary:
      return `${colors.ColorAllBaseWhite}00`;
    default:
      return colors.ColorAllBlueBlue600;
  }
}

function getButtonPressedColor(type: MButtonVariations): string {
  const { colors } = useTheme();

  switch (type) {
    case MButtonVariations.primary:
      return colors.ColorAllBlueBlue900;
    case MButtonVariations.secondary:
      return colors.ColorAllBlueBlue900;
    case MButtonVariations.ternary:
      return `${colors.ColorStatePressed50}00`;
    default:
      return colors.ColorAllBlueBlue900;
  }
}

function getButtonLabelColor(
  type: MButtonVariations,
  disabled: boolean
): string {
  const { colors } = useTheme();
  if (disabled) {
    return colors.ColorTextTertiary;
  }

  switch (type) {
    case MButtonVariations.primary:
      return colors.ColorTextInversePrimary;
    case MButtonVariations.secondary:
      return colors.ColorAllPrimaryPrimary600;
    case MButtonVariations.ternary:
      return colors.ColorAllPrimaryPrimary600;
    default:
      return colors.ColorTextInversePrimary;
  }
}

function getButtonLabelPressedColor(type: MButtonVariations): string {
  const { colors } = useTheme();

  switch (type) {
    case MButtonVariations.primary:
      return colors.ColorTextInversePrimary;
    case MButtonVariations.secondary:
      return colors.ColorTextInversePrimary;
    case MButtonVariations.ternary:
      return colors.ColorAllPrimaryPrimary900;
    default:
      return colors.ColorTextInversePrimary;
  }
}

export const MButtonStyles = ({ type, disabled = false }: TMButton) => {
  const { roundness } = useTheme();

  return StyleSheet.create({
    container: {
      height: 48,
      padding: 10,
      borderRadius: roundness,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getButtonColor(
        type || MButtonVariations.primary,
        disabled
      ),
    },
    containerPressed: {
      color: getButtonPressedColor(type || MButtonVariations.primary),
    },
    label: {
      color: getButtonLabelColor(type || MButtonVariations.primary, disabled),
    },
    labelPressed: {
      color: getButtonLabelPressedColor(type || MButtonVariations.primary),
    },
  });
};
