import React from 'react';
import {theme as defaultTheme, TTheme} from './theme';

interface TThemeProvider {
  theme?: TTheme;
  children: JSX.Element;
}

export const ThemeContext = React.createContext(defaultTheme);

const ThemeProvider = (props: TThemeProvider) => {
  const {theme, children} = props;

  const appTheme: TTheme = {
    ...defaultTheme,
    ...theme,
  };

  return (
    <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
export type {TThemeProvider};
