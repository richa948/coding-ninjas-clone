import { createContext, useContext, useState, useEffect } from "react";

// createContext makes a "channel" that components can subscribe to.
const ThemeContext = createContext();

// This is a custom hook — a small wrapper around useContext so that
// any component can just call useTheme() instead of importing
// useContext + ThemeContext separately every time.
export function useTheme() {
  return useContext(ThemeContext);
}

// This component wraps your whole app and PROVIDES the theme value
// to everything nested inside it.
export function ThemeProvider({ children }) {
  // On first load, check if the user has a saved preference in localStorage.
  // If not, default to false (light mode).
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  // Whenever isDarkMode changes, update the <html> element's class
  // AND save the choice to localStorage so it persists on refresh.
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

