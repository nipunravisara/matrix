import {StyleSheet} from 'react-native';
// import useTheme from '../../theme/useTheme';
import type {TMJumbotron} from './MJumbotron';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MIconButtonStyles = (_props: TMJumbotron) => {
  // const {colors} = useTheme();
  // const {alignment, size} = props;

  //   const iconButtonStyles = {
  //     height: getIconButtonSize(size),
  //     width: getIconButtonSize(size),
  //   }

  return StyleSheet.create({
    container: {
      borderRadius: 1000,
      justifyContent: 'center',
      alignItems: 'center',
      //   backgroundColor: getIconButtonType(colors, type, color, disabled),
      //   ...iconButtonStyles,
    },
  });
};
