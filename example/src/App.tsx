import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'matrix';
import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from './navigation/Navigator';
import theme from './theme/theme';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        />
        <Navigator initialScreen={'ButtonShowcase'} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
