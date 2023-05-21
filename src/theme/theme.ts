import type {TextStyle} from 'react-native';
import {getFontVariation} from '../utils/getFontWeight';

import {
  ColorAllBaseBlack,
  ColorAllBaseWhite,
  ColorAllBlueBlue100,
  ColorAllBlueBlue200,
  ColorAllBlueBlue300,
  ColorAllBlueBlue400,
  ColorAllBlueBlue50,
  ColorAllBlueBlue500,
  ColorAllBlueBlue600,
  ColorAllBlueBlue700,
  ColorAllBlueBlue800,
  ColorAllBlueBlue900,
  ColorAllGreenGreen100,
  ColorAllGreenGreen200,
  ColorAllGreenGreen300,
  ColorAllGreenGreen400,
  ColorAllGreenGreen50,
  ColorAllGreenGreen500,
  ColorAllGreenGreen600,
  ColorAllGreenGreen700,
  ColorAllGreenGreen800,
  ColorAllGreenGreen900,
  ColorAllNeutralNeutral100,
  ColorAllNeutralNeutral200,
  ColorAllNeutralNeutral300,
  ColorAllNeutralNeutral400,
  ColorAllNeutralNeutral50,
  ColorAllNeutralNeutral500,
  ColorAllNeutralNeutral600,
  ColorAllNeutralNeutral700,
  ColorAllNeutralNeutral800,
  ColorAllNeutralNeutral900,
  ColorAllPrimaryPrimary100,
  ColorAllPrimaryPrimary200,
  ColorAllPrimaryPrimary300,
  ColorAllPrimaryPrimary400,
  ColorAllPrimaryPrimary50,
  ColorAllPrimaryPrimary500,
  ColorAllPrimaryPrimary600,
  ColorAllPrimaryPrimary700,
  ColorAllPrimaryPrimary800,
  ColorAllPrimaryPrimary900,
  ColorAllRedRed100,
  ColorAllRedRed200,
  ColorAllRedRed300,
  ColorAllRedRed400,
  ColorAllRedRed50,
  ColorAllRedRed500,
  ColorAllRedRed600,
  ColorAllRedRed700,
  ColorAllRedRed800,
  ColorAllRedRed900,
  ColorAllYellowYellow100,
  ColorAllYellowYellow200,
  ColorAllYellowYellow300,
  ColorAllYellowYellow400,
  ColorAllYellowYellow50,
  ColorAllYellowYellow500,
  ColorAllYellowYellow600,
  ColorAllYellowYellow700,
  ColorAllYellowYellow800,
  ColorAllYellowYellow900,
  ColorBorderBorderInversePrimary,
  ColorBorderBorderInverseSecondary,
  ColorBorderBorderPrimary,
  ColorBorderBorderSecondary,
  ColorOverlayOverlay,
  ColorPrimaryAlert,
  ColorPrimaryInformation,
  ColorPrimaryPrimaryColor,
  ColorPrimarySuccess,
  ColorPrimaryWarning,
  ColorStateActive,
  ColorStateDisabled,
  ColorStatePressed50,
  ColorStatePressed700,
  ColorStateResting,
  ColorSurfaceBlue50,
  ColorSurfaceGreen50,
  ColorSurfaceInversePrimary,
  ColorSurfaceInverseSecondary,
  ColorSurfaceInverseTertiary,
  ColorSurfaceNeutral500,
  ColorSurfacePrimary,
  ColorSurfacePrimary50,
  ColorSurfaceRed50,
  ColorSurfaceSecondary,
  ColorSurfaceTeritary,
  ColorSurfaceYellow50,
  ColorTextInversePrimary,
  ColorTextInverseSecondary,
  ColorTextInverseTertiary,
  ColorTextPrimary,
  ColorTextSecondary,
  ColorTextTertiary,
  TypographyHeadingHeading1FontFamily,
  TypographyHeadingHeading1FontSize,
  TypographyHeadingHeading1FontWeight,
  TypographyHeadingHeading1LetterSpacing,
  TypographyHeadingHeading1LineHeight,
  TypographyHeadingHeading2FontFamily,
  TypographyHeadingHeading2FontSize,
  TypographyHeadingHeading2FontWeight,
  TypographyHeadingHeading2LetterSpacing,
  TypographyHeadingHeading2LineHeight,
  TypographyHeadingHeading3FontFamily,
  TypographyHeadingHeading3FontSize,
  TypographyHeadingHeading3FontWeight,
  TypographyHeadingHeading3LetterSpacing,
  TypographyHeadingHeading3LineHeight,
  TypographyHeadingHeading4FontFamily,
  TypographyHeadingHeading4FontSize,
  TypographyHeadingHeading4FontWeight,
  TypographyHeadingHeading4LetterSpacing,
  TypographyHeadingHeading4LineHeight,
  TypographyHeadingHeading5FontFamily,
  TypographyHeadingHeading5FontSize,
  TypographyHeadingHeading5FontWeight,
  TypographyHeadingHeading5LetterSpacing,
  TypographyHeadingHeading5LineHeight,
  TypographyLabelLabel1FontFamily,
  TypographyLabelLabel1FontSize,
  TypographyLabelLabel1FontWeight,
  TypographyLabelLabel1LetterSpacing,
  TypographyLabelLabel1LineHeight,
  TypographyLabelLabel2FontFamily,
  TypographyLabelLabel2FontSize,
  TypographyLabelLabel2FontWeight,
  TypographyLabelLabel2LetterSpacing,
  TypographyLabelLabel2LineHeight,
  TypographyLabelLabel3FontFamily,
  TypographyLabelLabel3FontSize,
  TypographyLabelLabel3FontWeight,
  TypographyLabelLabel3LetterSpacing,
  TypographyLabelLabel3LineHeight,
  TypographyLabelLabel4FontFamily,
  TypographyLabelLabel4FontSize,
  TypographyLabelLabel4FontWeight,
  TypographyLabelLabel4LetterSpacing,
  TypographyLabelLabel4LineHeight,
  TypographyLabelLabel5FontFamily,
  TypographyLabelLabel5FontSize,
  TypographyLabelLabel5FontWeight,
  TypographyLabelLabel5LetterSpacing,
  TypographyLabelLabel5LineHeight,
  TypographyParagraphParagraph1FontFamily,
  TypographyParagraphParagraph1FontSize,
  TypographyParagraphParagraph1FontWeight,
  TypographyParagraphParagraph1LetterSpacing,
  TypographyParagraphParagraph1LineHeight,
  TypographyParagraphParagraph2FontFamily,
  TypographyParagraphParagraph2FontSize,
  TypographyParagraphParagraph2FontWeight,
  TypographyParagraphParagraph2LetterSpacing,
  TypographyParagraphParagraph2LineHeight,
  TypographyParagraphParagraph3FontFamily,
  TypographyParagraphParagraph3FontSize,
  TypographyParagraphParagraph3FontWeight,
  TypographyParagraphParagraph3LetterSpacing,
  TypographyParagraphParagraph3LineHeight,
  TypographyParagraphParagraph4FontFamily,
  TypographyParagraphParagraph4FontSize,
  TypographyParagraphParagraph4FontWeight,
  TypographyParagraphParagraph4LetterSpacing,
  TypographyParagraphParagraph4LineHeight,
  TypographyParagraphParagraph5FontFamily,
  TypographyParagraphParagraph5FontSize,
  TypographyParagraphParagraph5FontWeight,
  TypographyParagraphParagraph5LetterSpacing,
  TypographyParagraphParagraph5LineHeight,
} from './designTokens';

interface TTheme {
  isDark: boolean;
  roundness: number;
  colors: {
    ColorAllPrimaryPrimary900: string;
    ColorAllPrimaryPrimary800: string;
    ColorAllPrimaryPrimary700: string;
    ColorAllPrimaryPrimary600: string;
    ColorAllPrimaryPrimary500: string;
    ColorAllPrimaryPrimary400: string;
    ColorAllPrimaryPrimary300: string;
    ColorAllPrimaryPrimary200: string;
    ColorAllPrimaryPrimary100: string;
    ColorAllPrimaryPrimary50: string;

    ColorAllGreenGreen900: string;
    ColorAllGreenGreen800: string;
    ColorAllGreenGreen700: string;
    ColorAllGreenGreen600: string;
    ColorAllGreenGreen500: string;
    ColorAllGreenGreen400: string;
    ColorAllGreenGreen300: string;
    ColorAllGreenGreen200: string;
    ColorAllGreenGreen100: string;
    ColorAllGreenGreen50: string;

    ColorAllRedRed900: string;
    ColorAllRedRed800: string;
    ColorAllRedRed700: string;
    ColorAllRedRed600: string;
    ColorAllRedRed500: string;
    ColorAllRedRed400: string;
    ColorAllRedRed300: string;
    ColorAllRedRed200: string;
    ColorAllRedRed100: string;
    ColorAllRedRed50: string;

    ColorAllBlueBlue900: string;
    ColorAllBlueBlue800: string;
    ColorAllBlueBlue700: string;
    ColorAllBlueBlue600: string;
    ColorAllBlueBlue500: string;
    ColorAllBlueBlue400: string;
    ColorAllBlueBlue300: string;
    ColorAllBlueBlue200: string;
    ColorAllBlueBlue100: string;
    ColorAllBlueBlue50: string;

    ColorAllYellowYellow900: string;
    ColorAllYellowYellow800: string;
    ColorAllYellowYellow700: string;
    ColorAllYellowYellow600: string;
    ColorAllYellowYellow500: string;
    ColorAllYellowYellow400: string;
    ColorAllYellowYellow300: string;
    ColorAllYellowYellow200: string;
    ColorAllYellowYellow100: string;
    ColorAllYellowYellow50: string;

    ColorAllNeutralNeutral900: string;
    ColorAllNeutralNeutral800: string;
    ColorAllNeutralNeutral700: string;
    ColorAllNeutralNeutral600: string;
    ColorAllNeutralNeutral500: string;
    ColorAllNeutralNeutral400: string;
    ColorAllNeutralNeutral300: string;
    ColorAllNeutralNeutral200: string;
    ColorAllNeutralNeutral100: string;
    ColorAllNeutralNeutral50: string;

    ColorSurfacePrimary: string;
    ColorSurfaceSecondary: string;
    ColorSurfaceTeritary: string;
    ColorSurfaceInversePrimary: string;
    ColorSurfaceInverseSecondary: string;
    ColorSurfaceInverseTertiary: string;

    ColorSurfaceGreen50: string;
    ColorSurfaceRed50: string;
    ColorSurfaceYellow50: string;
    ColorSurfaceBlue50: string;
    ColorSurfacePrimary50: string;
    ColorSurfaceNeutral500: string;

    ColorBorderBorderPrimary: string;
    ColorBorderBorderSecondary: string;
    ColorBorderBorderInversePrimary: string;
    ColorBorderBorderInverseSecondary: string;

    ColorTextPrimary: string;
    ColorTextSecondary: string;
    ColorTextTertiary: string;

    ColorTextInversePrimary: string;
    ColorTextInverseSecondary: string;
    ColorTextInverseTertiary: string;

    ColorOverlayOverlay: string;

    ColorPrimaryPrimaryColor: string;
    ColorPrimarySuccess: string;
    ColorPrimaryWarning: string;
    ColorPrimaryInformation: string;
    ColorPrimaryAlert: string;
    ColorStateResting: string;
    ColorStateActive: string;
    ColorStateDisabled: string;
    ColorStatePressed50: string;
    ColorStatePressed700: string;

    ColorAllBaseBlack: string;
    ColorAllBaseWhite: string;
  };
  typography: {
    TypographyHeadingHeading1: TextStyle;
    TypographyHeadingHeading2: TextStyle;
    TypographyHeadingHeading3: TextStyle;
    TypographyHeadingHeading4: TextStyle;
    TypographyHeadingHeading5: TextStyle;
    TypographyParagraphParagraph1: TextStyle;
    TypographyParagraphParagraph2: TextStyle;
    TypographyParagraphParagraph3: TextStyle;
    TypographyParagraphParagraph4: TextStyle;
    TypographyParagraphParagraph5: TextStyle;
    TypographyLabelLabel1: TextStyle;
    TypographyLabelLabel2: TextStyle;
    TypographyLabelLabel3: TextStyle;
    TypographyLabelLabel4: TextStyle;
    TypographyLabelLabel5: TextStyle;
  };
}

const theme: TTheme = {
  isDark: false,
  roundness: 20,
  colors: {
    ColorPrimaryPrimaryColor: ColorPrimaryPrimaryColor,
    ColorPrimarySuccess: ColorPrimarySuccess,
    ColorPrimaryWarning: ColorPrimaryWarning,
    ColorPrimaryInformation: ColorPrimaryInformation,
    ColorPrimaryAlert: ColorPrimaryAlert,
    ColorStateResting: ColorStateResting,
    ColorStateActive: ColorStateActive,
    ColorStateDisabled: ColorStateDisabled,
    ColorStatePressed50: ColorStatePressed50,
    ColorStatePressed700: ColorStatePressed700,

    ColorTextPrimary: ColorTextPrimary,
    ColorTextSecondary: ColorTextSecondary,
    ColorTextTertiary: ColorTextTertiary,

    ColorTextInversePrimary: ColorTextInversePrimary,
    ColorTextInverseSecondary: ColorTextInverseSecondary,
    ColorTextInverseTertiary: ColorTextInverseTertiary,

    ColorSurfacePrimary: ColorSurfacePrimary,
    ColorSurfaceSecondary: ColorSurfaceSecondary,
    ColorSurfaceTeritary: ColorSurfaceTeritary,
    ColorSurfaceInversePrimary: ColorSurfaceInversePrimary,
    ColorSurfaceInverseSecondary: ColorSurfaceInverseSecondary,
    ColorSurfaceInverseTertiary: ColorSurfaceInverseTertiary,

    ColorSurfaceGreen50: ColorSurfaceGreen50,
    ColorSurfaceRed50: ColorSurfaceRed50,
    ColorSurfaceYellow50: ColorSurfaceYellow50,
    ColorSurfaceBlue50: ColorSurfaceBlue50,
    ColorSurfacePrimary50: ColorSurfacePrimary50,
    ColorSurfaceNeutral500: ColorSurfaceNeutral500,

    ColorBorderBorderPrimary: ColorBorderBorderPrimary,
    ColorBorderBorderSecondary: ColorBorderBorderSecondary,
    ColorBorderBorderInversePrimary: ColorBorderBorderInversePrimary,
    ColorBorderBorderInverseSecondary: ColorBorderBorderInverseSecondary,

    ColorOverlayOverlay: ColorOverlayOverlay,

    ColorAllPrimaryPrimary900: ColorAllPrimaryPrimary900,
    ColorAllPrimaryPrimary800: ColorAllPrimaryPrimary800,
    ColorAllPrimaryPrimary700: ColorAllPrimaryPrimary700,
    ColorAllPrimaryPrimary600: ColorAllPrimaryPrimary600,
    ColorAllPrimaryPrimary500: ColorAllPrimaryPrimary500,
    ColorAllPrimaryPrimary400: ColorAllPrimaryPrimary400,
    ColorAllPrimaryPrimary300: ColorAllPrimaryPrimary300,
    ColorAllPrimaryPrimary200: ColorAllPrimaryPrimary200,
    ColorAllPrimaryPrimary100: ColorAllPrimaryPrimary100,
    ColorAllPrimaryPrimary50: ColorAllPrimaryPrimary50,
    ColorAllNeutralNeutral900: ColorAllNeutralNeutral900,
    ColorAllNeutralNeutral800: ColorAllNeutralNeutral800,
    ColorAllNeutralNeutral700: ColorAllNeutralNeutral700,
    ColorAllNeutralNeutral600: ColorAllNeutralNeutral600,
    ColorAllNeutralNeutral500: ColorAllNeutralNeutral500,
    ColorAllNeutralNeutral400: ColorAllNeutralNeutral400,
    ColorAllNeutralNeutral300: ColorAllNeutralNeutral300,
    ColorAllNeutralNeutral200: ColorAllNeutralNeutral200,
    ColorAllNeutralNeutral100: ColorAllNeutralNeutral100,
    ColorAllNeutralNeutral50: ColorAllNeutralNeutral50,
    ColorAllGreenGreen900: ColorAllGreenGreen900,
    ColorAllGreenGreen800: ColorAllGreenGreen800,
    ColorAllGreenGreen700: ColorAllGreenGreen700,
    ColorAllGreenGreen600: ColorAllGreenGreen600,
    ColorAllGreenGreen500: ColorAllGreenGreen500,
    ColorAllGreenGreen400: ColorAllGreenGreen400,
    ColorAllGreenGreen300: ColorAllGreenGreen300,
    ColorAllGreenGreen200: ColorAllGreenGreen200,
    ColorAllGreenGreen100: ColorAllGreenGreen100,
    ColorAllGreenGreen50: ColorAllGreenGreen50,
    ColorAllRedRed900: ColorAllRedRed900,
    ColorAllRedRed800: ColorAllRedRed800,
    ColorAllRedRed700: ColorAllRedRed700,
    ColorAllRedRed600: ColorAllRedRed600,
    ColorAllRedRed500: ColorAllRedRed500,
    ColorAllRedRed400: ColorAllRedRed400,
    ColorAllRedRed300: ColorAllRedRed300,
    ColorAllRedRed200: ColorAllRedRed200,
    ColorAllRedRed100: ColorAllRedRed100,
    ColorAllRedRed50: ColorAllRedRed50,
    ColorAllBlueBlue900: ColorAllBlueBlue900,
    ColorAllBlueBlue800: ColorAllBlueBlue800,
    ColorAllBlueBlue700: ColorAllBlueBlue700,
    ColorAllBlueBlue600: ColorAllBlueBlue600,
    ColorAllBlueBlue500: ColorAllBlueBlue500,
    ColorAllBlueBlue400: ColorAllBlueBlue400,
    ColorAllBlueBlue300: ColorAllBlueBlue300,
    ColorAllBlueBlue200: ColorAllBlueBlue200,
    ColorAllBlueBlue100: ColorAllBlueBlue100,
    ColorAllBlueBlue50: ColorAllBlueBlue50,
    ColorAllYellowYellow900: ColorAllYellowYellow900,
    ColorAllYellowYellow800: ColorAllYellowYellow800,
    ColorAllYellowYellow700: ColorAllYellowYellow700,
    ColorAllYellowYellow600: ColorAllYellowYellow600,
    ColorAllYellowYellow500: ColorAllYellowYellow500,
    ColorAllYellowYellow400: ColorAllYellowYellow400,
    ColorAllYellowYellow300: ColorAllYellowYellow300,
    ColorAllYellowYellow200: ColorAllYellowYellow200,
    ColorAllYellowYellow100: ColorAllYellowYellow100,
    ColorAllYellowYellow50: ColorAllYellowYellow50,
    ColorAllBaseBlack: ColorAllBaseBlack,
    ColorAllBaseWhite: ColorAllBaseWhite,
  },
  typography: {
    TypographyHeadingHeading1: {
      fontSize: TypographyHeadingHeading1FontSize,
      letterSpacing: TypographyHeadingHeading1LetterSpacing,
      lineHeight: TypographyHeadingHeading1LineHeight,
      ...getFontVariation(
        TypographyHeadingHeading1FontFamily,
        TypographyHeadingHeading1FontWeight
      ),
    },

    TypographyHeadingHeading2: {
      fontSize: TypographyHeadingHeading2FontSize,
      letterSpacing: TypographyHeadingHeading2LetterSpacing,
      lineHeight: TypographyHeadingHeading2LineHeight,
      ...getFontVariation(
        TypographyHeadingHeading2FontFamily,
        TypographyHeadingHeading2FontWeight
      ),
    },
    TypographyHeadingHeading3: {
      fontSize: TypographyHeadingHeading3FontSize,
      letterSpacing: TypographyHeadingHeading3LetterSpacing,
      lineHeight: TypographyHeadingHeading3LineHeight,
      ...getFontVariation(
        TypographyHeadingHeading3FontFamily,
        TypographyHeadingHeading3FontWeight
      ),
    },

    TypographyHeadingHeading4: {
      fontSize: TypographyHeadingHeading4FontSize,
      letterSpacing: TypographyHeadingHeading4LetterSpacing,
      lineHeight: TypographyHeadingHeading4LineHeight,
      ...getFontVariation(
        TypographyHeadingHeading4FontFamily,
        TypographyHeadingHeading4FontWeight
      ),
    },

    TypographyHeadingHeading5: {
      fontSize: TypographyHeadingHeading5FontSize,
      letterSpacing: TypographyHeadingHeading5LetterSpacing,
      lineHeight: TypographyHeadingHeading5LineHeight,
      ...getFontVariation(
        TypographyHeadingHeading5FontFamily,
        TypographyHeadingHeading5FontWeight
      ),
    },

    TypographyParagraphParagraph1: {
      fontSize: TypographyParagraphParagraph1FontSize,
      letterSpacing: TypographyParagraphParagraph1LetterSpacing,
      lineHeight: TypographyParagraphParagraph1LineHeight,
      ...getFontVariation(
        TypographyParagraphParagraph1FontFamily,
        TypographyParagraphParagraph1FontWeight
      ),
    },

    TypographyParagraphParagraph2: {
      fontSize: TypographyParagraphParagraph2FontSize,
      letterSpacing: TypographyParagraphParagraph2LetterSpacing,
      lineHeight: TypographyParagraphParagraph2LineHeight,
      ...getFontVariation(
        TypographyParagraphParagraph2FontFamily,
        TypographyParagraphParagraph2FontWeight
      ),
    },
    TypographyParagraphParagraph3: {
      fontSize: TypographyParagraphParagraph3FontSize,
      letterSpacing: TypographyParagraphParagraph3LetterSpacing,
      lineHeight: TypographyParagraphParagraph3LineHeight,
      ...getFontVariation(
        TypographyParagraphParagraph3FontFamily,
        TypographyParagraphParagraph3FontWeight
      ),
    },

    TypographyParagraphParagraph4: {
      fontSize: TypographyParagraphParagraph4FontSize,
      letterSpacing: TypographyParagraphParagraph4LetterSpacing,
      lineHeight: TypographyParagraphParagraph4LineHeight,
      ...getFontVariation(
        TypographyParagraphParagraph4FontFamily,
        TypographyParagraphParagraph4FontWeight
      ),
    },

    TypographyParagraphParagraph5: {
      fontSize: TypographyParagraphParagraph5FontSize,
      letterSpacing: TypographyParagraphParagraph5LetterSpacing,
      lineHeight: TypographyParagraphParagraph5LineHeight,
      ...getFontVariation(
        TypographyParagraphParagraph5FontFamily,
        TypographyParagraphParagraph5FontWeight
      ),
    },

    TypographyLabelLabel1: {
      fontSize: TypographyLabelLabel1FontSize,
      letterSpacing: TypographyLabelLabel1LetterSpacing,
      lineHeight: TypographyLabelLabel1LineHeight,
      ...getFontVariation(
        TypographyLabelLabel1FontFamily,
        TypographyLabelLabel1FontWeight
      ),
    },

    TypographyLabelLabel2: {
      fontSize: TypographyLabelLabel2FontSize,
      letterSpacing: TypographyLabelLabel2LetterSpacing,
      lineHeight: TypographyLabelLabel2LineHeight,
      ...getFontVariation(
        TypographyLabelLabel2FontFamily,
        TypographyLabelLabel2FontWeight
      ),
    },

    TypographyLabelLabel3: {
      fontSize: TypographyLabelLabel3FontSize,
      letterSpacing: TypographyLabelLabel3LetterSpacing,
      lineHeight: TypographyLabelLabel3LineHeight,
      ...getFontVariation(
        TypographyLabelLabel3FontFamily,
        TypographyLabelLabel3FontWeight
      ),
    },

    TypographyLabelLabel4: {
      fontSize: TypographyLabelLabel4FontSize,
      letterSpacing: TypographyLabelLabel4LetterSpacing,
      lineHeight: TypographyLabelLabel4LineHeight,
      ...getFontVariation(
        TypographyLabelLabel4FontFamily,
        TypographyLabelLabel4FontWeight
      ),
    },

    TypographyLabelLabel5: {
      fontSize: TypographyLabelLabel5FontSize,
      letterSpacing: TypographyLabelLabel5LetterSpacing,
      lineHeight: TypographyLabelLabel5LineHeight,
      ...getFontVariation(
        TypographyLabelLabel5FontFamily,
        TypographyLabelLabel5FontWeight
      ),
    },
  },
};

export {theme};
export type {TTheme};
