import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'matrix';
import React from 'react';
import Navigator from './navigation/Navigator';
import theme from './theme/theme';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator initialScreen={'HeaderShowcase'} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
