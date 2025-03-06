import React from "react";
export const THEMES = {
    light: {
        color:'black',
        background:'white',
    },
    dark: {
        color: 'white',
        background: '#222222',
    }
}
export const ThemeContext = React.createContext([THEMES.dark, () => {}]);