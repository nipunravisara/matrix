import {StyleSheet} from 'react-native';
import useTheme from '../../theme/useTheme';
import type {TMHeader} from './MHeader';

export default function getTitleAlignment(
  titleAlignment: Pick<TMHeader, 'titleAlignment'>['titleAlignment']
) {
  switch (titleAlignment) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
}

export const MHeaderStyles = ({
  bottomLine,
  titleAlignment,
  styles,
}: TMHeader) => {
  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      height: 56,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      backgroundColor: colors.ColorSurfacePrimary,
      borderBottomColor: bottomLine
        ? colors.ColorBorderBorderPrimary
        : colors.ColorSurfacePrimary,
      ...styles,
    },
    leftContainer: {
      flex: 1,
      paddingLeft: 16,
      alignItems: 'flex-start',
    },
    titleContainer: {
      flex: 1,
      paddingLeft: 16,
      alignItems: getTitleAlignment(titleAlignment),
    },
    rightContainer: {
      flex: 1,
      paddingRight: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });
};
