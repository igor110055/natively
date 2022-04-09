import React, { FC, createContext, useEffect, useReducer, Reducer } from 'react';
import { Appearance, AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import type { ThemeContextProps, ThemeActions, ThemeState } from "../../types";
import { themeReducer, lightTheme, darkTheme } from './themeReducer';

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps );

export const ThemeProvider: FC = ({ children }): JSX.Element => {

    const [ theme, dispatch ] = useReducer<Reducer<ThemeState,ThemeActions>>( 
        themeReducer, 
        Appearance.getColorScheme() === 'light' ? lightTheme : darkTheme
    );
    
    const checkTheme = async() => {
        const themeKey = await AsyncStorage.getItem('theme');
        if (!themeKey) return;
        else if(themeKey === 'dark') dispatch({ type: 'dark_theme' });
        else if(themeKey === 'light') dispatch({ type: 'light_theme' });
    };

    useEffect(() => {
        checkTheme();
    }, []);

    const setDarkTheme = async() => {
        await AsyncStorage.setItem('theme', 'dark');
        dispatch({ type: 'dark_theme' });
    };

    const setLightTheme = async() => {
        await AsyncStorage.setItem('theme', 'light');
        dispatch({ type: 'light_theme' });
    };

    return (
        <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
            { children }
        </ThemeContext.Provider>
    );
};