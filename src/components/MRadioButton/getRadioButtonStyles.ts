import {StyleSheet} from 'react-native';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import type {TMRadioButton} from './MRadioButton';

function getRadioButtonRadius(roundness: number) {
  if (roundness < 1) {
    return roundness;
  } else {
    return roundness - 2;
  }
}

function getRadioButtonFillColor(
  selected: boolean | undefined,
  colors: Pick<TTheme, 'colors'>['colors']
) {
  if (selected) {
    return colors.ColorPrimaryPrimaryColor;
  } else {
    return 'transparent';
  }
}

function getRadioButtonFrameColor(
  selected: boolean | undefined,
  colors: Pick<TTheme, 'colors'>['colors'],
  isDark: boolean
) {
  if (selected) {
    return colors.ColorPrimaryPrimaryColor;
  } else {
    return isDark
      ? colors.ColorBorderBorderInversePrimary
      : colors.ColorBorderBorderPrimary;
  }
}

export const MButtonStyles = (props: TMRadioButton) => {
  const {colors, isDark, roundness} = useTheme();
  const {selected} = props;

  return StyleSheet.create({
    container: {flexDirection: 'row', paddingVertical: 5},
    radioButtonFrame: {
      borderWidth: 2,
      height: 24,
      width: 24,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: roundness,
      borderColor: getRadioButtonFrameColor(selected, colors, isDark),
    },
    radioButtonFill: {
      height: 14,
      width: 14,
      borderRadius: getRadioButtonRadius(roundness),
      backgroundColor: getRadioButtonFillColor(selected, colors),
    },
    radioButtonLabel: {
      marginLeft: 8,
    },
  });
};
