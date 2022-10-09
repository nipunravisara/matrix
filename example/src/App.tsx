import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'matrix';
import React from 'react';
import Navigator from './navigation/Navigator';

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigator initialScreen={'HeaderDemo'} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
