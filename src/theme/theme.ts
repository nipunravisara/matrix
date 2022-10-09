import { getFontWeight } from '../utils/getFontWeight';
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
  ColorBaseGrayDark,
  ColorBaseGrayLight,
  ColorBaseGrayMedium,
  ColorBaseGreen,
  ColorBaseRed,
  ColorBorderBorderPrimary,
  ColorBorderBorderSecondary,
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
  dark: boolean;
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

    ColorTextPrimary: string;
    ColorTextSecondary: string;
    ColorTextTertiary: string;

    ColorTextInversePrimary: string;
    ColorTextInverseSecondary: string;
    ColorTextInverseTertiary: string;

    ColorBaseGrayLight: string;
    ColorBaseGrayMedium: string;
    ColorBaseGrayDark: string;

    ColorBaseRed: string;
    ColorBaseGreen: string;
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
    TypographyHeadingHeading1FontSize: number;
    TypographyHeadingHeading1FontFamily: string;
    TypographyHeadingHeading1FontWeight: string;
    TypographyHeadingHeading1LetterSpacing: number;
    TypographyHeadingHeading1LineHeight: number;

    TypographyHeadingHeading2FontSize: number;
    TypographyHeadingHeading2FontFamily: string;
    TypographyHeadingHeading2FontWeight: string;
    TypographyHeadingHeading2LetterSpacing: number;
    TypographyHeadingHeading2LineHeight: number;

    TypographyHeadingHeading3FontSize: number;
    TypographyHeadingHeading3FontFamily: string;
    TypographyHeadingHeading3FontWeight: string;
    TypographyHeadingHeading3LetterSpacing: number;
    TypographyHeadingHeading3LineHeight: number;

    TypographyHeadingHeading4FontSize: number;
    TypographyHeadingHeading4FontFamily: string;
    TypographyHeadingHeading4FontWeight: string;
    TypographyHeadingHeading4LetterSpacing: number;
    TypographyHeadingHeading4LineHeight: number;

    TypographyHeadingHeading5FontSize: number;
    TypographyHeadingHeading5FontFamily: string;
    TypographyHeadingHeading5FontWeight: string;
    TypographyHeadingHeading5LetterSpacing: number;
    TypographyHeadingHeading5LineHeight: number;

    TypographyParagraphParagraph1FontSize: number;
    TypographyParagraphParagraph1FontFamily: string;
    TypographyParagraphParagraph1FontWeight: string;
    TypographyParagraphParagraph1LetterSpacing: number;
    TypographyParagraphParagraph1LineHeight: number;

    TypographyParagraphParagraph2FontSize: number;
    TypographyParagraphParagraph2FontFamily: string;
    TypographyParagraphParagraph2FontWeight: string;
    TypographyParagraphParagraph2LetterSpacing: number;
    TypographyParagraphParagraph2LineHeight: number;

    TypographyParagraphParagraph3FontSize: number;
    TypographyParagraphParagraph3FontFamily: string;
    TypographyParagraphParagraph3FontWeight: string;
    TypographyParagraphParagraph3LetterSpacing: number;
    TypographyParagraphParagraph3LineHeight: number;

    TypographyParagraphParagraph4FontSize: number;
    TypographyParagraphParagraph4FontFamily: string;
    TypographyParagraphParagraph4FontWeight: string;
    TypographyParagraphParagraph4LetterSpacing: number;
    TypographyParagraphParagraph4LineHeight: number;

    TypographyParagraphParagraph5FontSize: number;
    TypographyParagraphParagraph5FontFamily: string;
    TypographyParagraphParagraph5FontWeight: string;
    TypographyParagraphParagraph5LetterSpacing: number;
    TypographyParagraphParagraph5LineHeight: number;

    TypographyLabelLabel1FontSize: number;
    TypographyLabelLabel1FontFamily: string;
    TypographyLabelLabel1FontWeight: string;
    TypographyLabelLabel1LetterSpacing: number;
    TypographyLabelLabel1LineHeight: number;

    TypographyLabelLabel2FontSize: number;
    TypographyLabelLabel2FontFamily: string;
    TypographyLabelLabel2FontWeight: string;
    TypographyLabelLabel2LetterSpacing: number;
    TypographyLabelLabel2LineHeight: number;

    TypographyLabelLabel3FontSize: number;
    TypographyLabelLabel3FontFamily: string;
    TypographyLabelLabel3FontWeight: string;
    TypographyLabelLabel3LetterSpacing: number;
    TypographyLabelLabel3LineHeight: number;

    TypographyLabelLabel4FontSize: number;
    TypographyLabelLabel4FontFamily: string;
    TypographyLabelLabel4FontWeight: string;
    TypographyLabelLabel4LetterSpacing: number;
    TypographyLabelLabel4LineHeight: number;

    TypographyLabelLabel5FontSize: number;
    TypographyLabelLabel5FontFamily: string;
    TypographyLabelLabel5FontWeight: string;
    TypographyLabelLabel5LetterSpacing: number;
    TypographyLabelLabel5LineHeight: number;
  };
}

const theme: TTheme = {
  dark: false,
  roundness: 10,
  colors: {
    ColorBaseGrayLight: ColorBaseGrayLight,
    ColorBaseGrayMedium: ColorBaseGrayMedium,
    ColorBaseGrayDark: ColorBaseGrayDark,

    ColorBaseRed: ColorBaseRed,
    ColorBaseGreen: ColorBaseGreen,
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
    TypographyHeadingHeading1FontSize: TypographyHeadingHeading1FontSize,
    TypographyHeadingHeading1FontFamily: TypographyHeadingHeading1FontFamily,
    TypographyHeadingHeading1FontWeight: getFontWeight(
      TypographyHeadingHeading1FontWeight
    ),
    TypographyHeadingHeading1LetterSpacing:
      TypographyHeadingHeading1LetterSpacing,
    TypographyHeadingHeading1LineHeight: TypographyHeadingHeading1LineHeight,

    TypographyHeadingHeading2FontSize: TypographyHeadingHeading2FontSize,
    TypographyHeadingHeading2FontFamily: TypographyHeadingHeading2FontFamily,
    TypographyHeadingHeading2FontWeight: getFontWeight(
      TypographyHeadingHeading2FontWeight
    ),
    TypographyHeadingHeading2LetterSpacing:
      TypographyHeadingHeading2LetterSpacing,
    TypographyHeadingHeading2LineHeight: TypographyHeadingHeading2LineHeight,

    TypographyHeadingHeading3FontSize: TypographyHeadingHeading3FontSize,
    TypographyHeadingHeading3FontFamily: TypographyHeadingHeading3FontFamily,
    TypographyHeadingHeading3FontWeight: getFontWeight(
      TypographyHeadingHeading3FontWeight
    ),
    TypographyHeadingHeading3LetterSpacing:
      TypographyHeadingHeading3LetterSpacing,
    TypographyHeadingHeading3LineHeight: TypographyHeadingHeading3LineHeight,

    TypographyHeadingHeading4FontSize: TypographyHeadingHeading4FontSize,
    TypographyHeadingHeading4FontFamily: TypographyHeadingHeading4FontFamily,
    TypographyHeadingHeading4FontWeight: getFontWeight(
      TypographyHeadingHeading4FontWeight
    ),
    TypographyHeadingHeading4LetterSpacing:
      TypographyHeadingHeading4LetterSpacing,
    TypographyHeadingHeading4LineHeight: TypographyHeadingHeading4LineHeight,

    TypographyHeadingHeading5FontSize: TypographyHeadingHeading5FontSize,
    TypographyHeadingHeading5FontFamily: TypographyHeadingHeading5FontFamily,
    TypographyHeadingHeading5FontWeight: getFontWeight(
      TypographyHeadingHeading5FontWeight
    ),
    TypographyHeadingHeading5LetterSpacing:
      TypographyHeadingHeading5LetterSpacing,
    TypographyHeadingHeading5LineHeight: TypographyHeadingHeading5LineHeight,

    TypographyParagraphParagraph1FontSize:
      TypographyParagraphParagraph1FontSize,
    TypographyParagraphParagraph1FontFamily:
      TypographyParagraphParagraph1FontFamily,
    TypographyParagraphParagraph1FontWeight: getFontWeight(
      TypographyParagraphParagraph1FontWeight
    ),
    TypographyParagraphParagraph1LetterSpacing:
      TypographyParagraphParagraph1LetterSpacing,
    TypographyParagraphParagraph1LineHeight:
      TypographyParagraphParagraph1LineHeight,

    TypographyParagraphParagraph2FontSize:
      TypographyParagraphParagraph2FontSize,
    TypographyParagraphParagraph2FontFamily:
      TypographyParagraphParagraph2FontFamily,
    TypographyParagraphParagraph2FontWeight: getFontWeight(
      TypographyParagraphParagraph2FontWeight
    ),
    TypographyParagraphParagraph2LetterSpacing:
      TypographyParagraphParagraph2LetterSpacing,
    TypographyParagraphParagraph2LineHeight:
      TypographyParagraphParagraph2LineHeight,

    TypographyParagraphParagraph3FontSize:
      TypographyParagraphParagraph3FontSize,
    TypographyParagraphParagraph3FontFamily:
      TypographyParagraphParagraph3FontFamily,
    TypographyParagraphParagraph3FontWeight: getFontWeight(
      TypographyParagraphParagraph3FontWeight
    ),
    TypographyParagraphParagraph3LetterSpacing:
      TypographyParagraphParagraph3LetterSpacing,
    TypographyParagraphParagraph3LineHeight:
      TypographyParagraphParagraph3LineHeight,

    TypographyParagraphParagraph4FontSize:
      TypographyParagraphParagraph4FontSize,
    TypographyParagraphParagraph4FontFamily:
      TypographyParagraphParagraph4FontFamily,
    TypographyParagraphParagraph4FontWeight: getFontWeight(
      TypographyParagraphParagraph4FontWeight
    ),
    TypographyParagraphParagraph4LetterSpacing:
      TypographyParagraphParagraph4LetterSpacing,
    TypographyParagraphParagraph4LineHeight:
      TypographyParagraphParagraph4LineHeight,

    TypographyParagraphParagraph5FontSize:
      TypographyParagraphParagraph5FontSize,
    TypographyParagraphParagraph5FontFamily:
      TypographyParagraphParagraph5FontFamily,
    TypographyParagraphParagraph5FontWeight: getFontWeight(
      TypographyParagraphParagraph5FontWeight
    ),
    TypographyParagraphParagraph5LetterSpacing:
      TypographyParagraphParagraph5LetterSpacing,
    TypographyParagraphParagraph5LineHeight:
      TypographyParagraphParagraph5LineHeight,

    TypographyLabelLabel1FontSize: TypographyLabelLabel1FontSize,
    TypographyLabelLabel1FontFamily: TypographyLabelLabel1FontFamily,
    TypographyLabelLabel1FontWeight: getFontWeight(
      TypographyLabelLabel1FontWeight
    ),
    TypographyLabelLabel1LetterSpacing: TypographyLabelLabel1LetterSpacing,
    TypographyLabelLabel1LineHeight: TypographyLabelLabel1LineHeight,

    TypographyLabelLabel2FontSize: TypographyLabelLabel2FontSize,
    TypographyLabelLabel2FontFamily: TypographyLabelLabel2FontFamily,
    TypographyLabelLabel2FontWeight: getFontWeight(
      TypographyLabelLabel2FontWeight
    ),
    TypographyLabelLabel2LetterSpacing: TypographyLabelLabel2LetterSpacing,
    TypographyLabelLabel2LineHeight: TypographyLabelLabel2LineHeight,

    TypographyLabelLabel3FontSize: TypographyLabelLabel3FontSize,
    TypographyLabelLabel3FontFamily: TypographyLabelLabel3FontFamily,
    TypographyLabelLabel3FontWeight: getFontWeight(
      TypographyLabelLabel3FontWeight
    ),
    TypographyLabelLabel3LetterSpacing: TypographyLabelLabel3LetterSpacing,
    TypographyLabelLabel3LineHeight: TypographyLabelLabel3LineHeight,

    TypographyLabelLabel4FontSize: TypographyLabelLabel4FontSize,
    TypographyLabelLabel4FontFamily: TypographyLabelLabel4FontFamily,
    TypographyLabelLabel4FontWeight: getFontWeight(
      TypographyLabelLabel4FontWeight
    ),
    TypographyLabelLabel4LetterSpacing: TypographyLabelLabel4LetterSpacing,
    TypographyLabelLabel4LineHeight: TypographyLabelLabel4LineHeight,

    TypographyLabelLabel5FontSize: TypographyLabelLabel5FontSize,
    TypographyLabelLabel5FontFamily: TypographyLabelLabel5FontFamily,
    TypographyLabelLabel5FontWeight: getFontWeight(
      TypographyLabelLabel5FontWeight
    ),
    TypographyLabelLabel5LetterSpacing: TypographyLabelLabel5LetterSpacing,
    TypographyLabelLabel5LineHeight: TypographyLabelLabel5LineHeight,
  },
};

export { theme };
export type { TTheme };
