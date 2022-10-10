import ThemeProvider, { TThemeProvider } from './theme/ThemeProvider';
import { getFontVariation } from './utils/getFontWeight';
import useTheme from './theme/useTheme';

import MText, { MTextVariant, TMText } from './components/MText/MText';
import type { TTheme } from './theme/theme';

export { MText, MTextVariant };
export type { TMText };

export { ThemeProvider, useTheme };
export type { TThemeProvider, TTheme };

export { getFontVariation };
