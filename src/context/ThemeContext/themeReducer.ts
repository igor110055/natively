import { ThemeState, ThemeActions } from "../../types";

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0, 0.6)',
    shadowColor: "#000",
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
};

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255, 0.6)',
    shadowColor: "#fff",
    colors: {
        primary: '#75CEDB',
        background: '#121212',
        card: 'black',
        text: 'white',
        border: 'black',
        notification: 'teal',
    }
};

export const themeReducer = ( state: ThemeState,  action: ThemeActions ): ThemeState => {

    switch ( action.type ) {
        case 'light_theme':
            return { ...lightTheme }
        case 'dark_theme':
            return { ...darkTheme }
        default:
            return state;
    }
};