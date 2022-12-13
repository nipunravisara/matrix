import {StyleSheet} from 'react-native';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';
import type {TMTextInput} from './MTextInput';

function getPrefixColor(colors: Pick<TTheme, 'colors'>): string {
  return colors.colors.ColorTextSecondary;
}

function getHintColor(colors: Pick<TTheme, 'colors'>): string {
  return colors.colors.ColorTextSecondary;
}

function getBorderColor(colors: Pick<TTheme, 'colors'>): string {
  return colors.colors.ColorBorderBorderPrimary;
}

export const MTextInputStyles = (props: TMTextInput) => {
  console.log(props);

  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      borderColor: getBorderColor({colors}),
      borderWidth: 1,
      height: 52,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    textField: {zIndex: 10, flex: 1},
    placeholder: {
      color: colors.ColorTextSecondary,
    },
    hint: {
      marginTop: 4,
      color: getHintColor({colors}),
    },
    error: {
      marginTop: 4,
      color: colors.ColorPrimaryWarning,
    },
    prefix: {
      color: getPrefixColor({colors}),
    },
  });
};
