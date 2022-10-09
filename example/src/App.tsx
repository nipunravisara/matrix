import { ThemeProvider } from 'matrix';
import * as React from 'react';
import GetStarted from './screens/GetStarted';

export default function App() {
  return (
    <ThemeProvider>
      <GetStarted />
    </ThemeProvider>
  );
}
