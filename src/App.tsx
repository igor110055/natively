import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { LogBox } from 'react-native';
import { DataProvider, ThemeProvider } from './context';
import { DrawerNav } from './DrawerNav';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export const App: FC = (): JSX.Element => (
  <DataProvider>
    <ThemeProvider>
      <DrawerNav />
    </ThemeProvider>
  </DataProvider>
);