import {useEffect, useState } from "react";

import ThemeContext from "../../context/contextapi";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light-theme";
  });

  const themeHandler = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme; // Dynamically set the body class based on the theme
  }, [theme]);

  const contextValue = {
    theme,
    themeHandler,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
