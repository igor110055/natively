import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { LogBox } from 'react-native';
import { DataProvider } from './context/DataContext/DataContext';
import { DrawerNav } from './DrawerNav';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export const App: FC = (): JSX.Element => {

  return (
    <DataProvider>
      <ThemeProvider>
        <DrawerNav />
      </ThemeProvider>
    </DataProvider>
  );
};