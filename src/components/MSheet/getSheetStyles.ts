import {StyleSheet} from 'react-native';
import type {TMSheet} from './MSheet';
import useTheme from '../../theme/useTheme';

export const MHeaderStyles = (props: TMSheet) => {
  const {isDark, colors} = useTheme();
  console.log(props);

  const sheetStyles = {
    backgroundColor: isDark
      ? colors.ColorSurfaceInversePrimary
      : colors.ColorSurfacePrimary,
  };

  return StyleSheet.create({
    conatiner: {
      height: '100%',
      ...sheetStyles,
    },
  });
};
