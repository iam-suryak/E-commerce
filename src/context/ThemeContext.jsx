import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(()=>{
        return localStorage.getItem("nexora-theme") === "dark";
    });


    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem(
            "nexora-theme",
            darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode}}>
            {children}

        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);