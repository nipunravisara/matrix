import {StyleSheet} from 'react-native';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import {MButtonVariations, TMButton} from './MButton';

function getButtonColor(
  colors: Pick<TTheme, 'colors'>,
  type: MButtonVariations,
  disabled: boolean | undefined
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
  disabled: boolean | undefined
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

function getButtonSize(
  expanded: boolean | undefined,
  suffix: string | JSX.Element | undefined
) {
  if (!expanded && suffix) {
    return 'stretch';
  } else if (expanded) {
    return 'stretch';
  } else {
    return 'flex-start';
  }
}

function getButtonSpred(
  expanded: boolean | undefined,
  suffix: string | JSX.Element | undefined
) {
  if (!expanded && suffix) {
    return 1;
  } else if (expanded) {
    return 1;
  } else {
    return 0;
  }
}

export const MButtonStyles = (props: TMButton) => {
  const {colors, roundness} = useTheme();
  const {expanded, suffix, type, disabled} = props;

  return StyleSheet.create({
    container: {
      borderRadius: roundness,
      height: 48,
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignSelf: getButtonSize(expanded, suffix),
      justifyContent: 'center',
      backgroundColor: getButtonColor(
        {colors},
        type || MButtonVariations.primary,
        disabled
      ),
    },
    containerPressed: {
      color: getButtonPressedColor({colors}, type || MButtonVariations.primary),
    },
    innerContainer: {
      flexDirection: 'row',
    },
    leftContainer: {
      flex: getButtonSpred(expanded, suffix),
      alignItems: 'flex-start',
    },
    titleContainer: {
      flex: getButtonSpred(expanded, suffix),
      alignItems: 'center',
    },
    rightContainer: {
      flex: getButtonSpred(expanded, suffix),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    label: {
      color: getButtonLabelColor(
        {colors},
        type || MButtonVariations.primary,
        disabled
      ),
    },
    labelPressed: {
      color: getButtonLabelPressedColor(
        {colors},
        type || MButtonVariations.primary
      ),
    },
  });
};
