import { Theme } from '@react-navigation/native';

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
    shadowColor: string
};

export type ThemeContextProps = {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
};

export type ThemeActions =
    | { type: 'light_theme' }
    | { type: 'dark_theme' };