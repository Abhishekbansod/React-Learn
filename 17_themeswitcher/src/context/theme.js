import { createContext, useContext } from "react";

// creating and passing the values to context
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {}
});


// providing the context => letting other components know that context exits
export const ThemeProvider =  ThemeContext.Provider;


// custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}