import React from 'react';
import { theme as defaultTheme, TTheme } from './theme';
import { useColorScheme } from 'react-native';

interface TThemeProvider {
  theme?: TTheme;
  children: JSX.Element;
}

export const ThemeContext = React.createContext(defaultTheme);

const ThemeProvider = (props: TThemeProvider) => {
  const { theme, children } = props;
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const appTheme: TTheme = {
    ...defaultTheme,
    ...theme,
    dark: isDark,
  };

  return (
    <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
export type { TThemeProvider };
