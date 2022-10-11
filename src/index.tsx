// theme
import ThemeProvider, { TThemeProvider } from './theme/ThemeProvider';
import useTheme from './theme/useTheme';
import type { TTheme } from './theme/theme';

// utils
import { getFontVariation } from './utils/getFontWeight';

// components
import MText, { MTextVariant, TMText } from './components/MText/MText';
import MTitle, { MTitleVariant, TMtitle } from './components/MTitle/Mtitle';
import MIcon, { TMIcon } from './components/MIcon/MIcon';
import MButton, { TMButton } from './components/MButton/MButton';

export { ThemeProvider, useTheme };
export type { TThemeProvider, TTheme };

export { getFontVariation };

export { MText, MTextVariant };
export type { TMText };
export { MTitle, MTitleVariant };
export type { TMtitle };
export { MIcon };
export type { TMIcon };
export { MButton };
export type { TMButton };
