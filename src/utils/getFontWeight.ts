import { Platform, TextStyle } from 'react-native';

export const getFontVariation = (
  fontFamily: string,
  fontWeight: number
): TextStyle => {
  const isAndroid = Platform.OS;

  if (isAndroid === 'android') {
    switch (fontWeight) {
      case 700:
        return {
          fontFamily: `${fontFamily}-Bold`,
        };
      case 600:
        return {
          fontFamily: `${fontFamily}-SemiBold`,
        };
      case 500:
        return {
          fontFamily: `${fontFamily}-Medium`,
        };
      case 300:
        return {
          fontFamily: `${fontFamily}-Light`,
        };
      default:
        return {
          fontFamily: `${fontFamily}-Regular`,
        };
    }
  } else {
    switch (fontWeight) {
      case 700:
        return {
          fontFamily: fontFamily,
          fontWeight: '700',
        };
      case 600:
        return {
          fontFamily: fontFamily,
          fontWeight: '600',
        };
      case 500:
        return {
          fontFamily: fontFamily,
          fontWeight: '500',
        };
      case 300:
        return {
          fontFamily: fontFamily,
          fontWeight: '300',
        };
      default:
        return {
          fontFamily: fontFamily,
          fontWeight: '300',
        };
    }
  }
};
