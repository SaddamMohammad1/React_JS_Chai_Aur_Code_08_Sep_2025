import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// Here created a custom hook to access the context using this hooks in anywhere
export default function useTheme() {
    return useContext(ThemeContext)
}