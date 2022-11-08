// theme
import ThemeProvider, {TThemeProvider} from './theme/ThemeProvider';
import useTheme from './theme/useTheme';
import type {TTheme} from './theme/theme';

// utils
import {getFontVariation} from './utils/getFontWeight';

// components
import MText, {MTextVariant, TMText} from './components/MText/MText';
import MTitle, {MTitleVariant, TMtitle} from './components/MTitle/Mtitle';
import MIcon, {TMIcon} from './components/MIcon/MIcon';
import MLabel, {TMLabel, MLabelVariations} from './components/MLabel/MLabel';
import MButton, {
  TMButton,
  MButtonVariations,
} from './components/MButton/MButton';
import MHeader, {TMHeader} from './components/MHeader/MHeader';
import MTextInput, {
  TMTextInput,
  MTextInputStateVariations,
} from './components/MTextInput/MTextInput';

export {ThemeProvider, useTheme};
export type {TThemeProvider, TTheme};

export {getFontVariation};

export {MText, MTextVariant};
export type {TMText};
export {MTitle, MTitleVariant};
export type {TMtitle};
export {MIcon};
export type {TMIcon};
export {MLabel, MLabelVariations};
export type {TMLabel};
export {MButton, MButtonVariations};
export type {TMButton};
export {MHeader};
export type {TMHeader};
export {MTextInput, MTextInputStateVariations};
export type {TMTextInput};
