import {withLoading} from "./hoc/withLoading";
import {getLanguages} from "./const/languages";
import App from "./App";
import {useState} from "react";
import {THEMES} from "./const/contexts/ThemeContext";
import { ThemeContext } from 'styled-components';

const AppComponent = withLoading(App, getLanguages)

export const AppContainer = () => {
    const [theme, setTheme] = useState(THEMES.dark);

    const toggleTheme = () => {
        const nextTheme = (theme === THEMES.dark) ? THEMES.light : THEMES.dark;
        setTheme(nextTheme);
    }
    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            <AppComponent/>
        </ThemeContext.Provider>
    )
}