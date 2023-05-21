import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Navigator from './navigation/Navigator';
import theme from './theme/theme';

import {ThemeProvider} from '../../';

export default function App(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      theme={{
        ...theme,
        isDark: colorScheme === 'dark' ? true : false,
      }}
    >
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        />
        <Navigator initialScreen="Showcase" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
