import {ColorValue, StyleSheet} from 'react-native';
import useTheme from '../../theme/useTheme';
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
      backgroundColor: '#2B2B2B',
      opacity: 2,
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalDescription: {
      marginBottom: 15,
      textAlign: 'center',
      color: 'gray',
    },
  });
};
