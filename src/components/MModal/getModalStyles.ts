import {ColorValue, StyleSheet} from 'react-native';
import {hexToRgb, useTheme} from '../..';
import type {TMModal} from './MModal';

export const MModalStyles = (props: TMModal) => {
  const {isDark, colors, roundness} = useTheme();
  const {modalRoundness} = props;

  const containerStyles = {
    borderRadius: modalRoundness ? modalRoundness : roundness,
    backgroundColor: isDark
      ? (colors.ColorSurfaceInversePrimary as ColorValue)
      : (colors.ColorSurfacePrimary as ColorValue),
  };

  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: hexToRgb(colors.ColorOverlayOverlay, 0.5),
    },
    modalView: {
      margin: 40,
      padding: 30,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      ...containerStyles,
    },
  });
};
