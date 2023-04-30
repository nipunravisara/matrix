import {StyleSheet} from 'react-native';
import type {TMSheet} from './MSheet';
import useTheme from '../../theme/useTheme';

export const MSheetStyles = (props: TMSheet) => {
  const {isDark, colors} = useTheme();

  const sheetStyles = {
    backgroundColor: isDark
      ? colors.ColorSurfaceInversePrimary
      : colors.ColorSurfacePrimary,
  };

  return StyleSheet.create({
    conatiner: {
      height: '100%',
      ...sheetStyles,
      ...props.styles,
    },
  });
};
