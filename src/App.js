import React, { useEffect, useState } from "react";
import ThemeContext from "./context/contextapi";
import ThemeChangeBtn from "./components/theme-change-btn/ThemeChangeBtn";
import './App.css'; // Import the CSS file

const App = () => {
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
    <div className={`app ${theme}`}>
      <ThemeContext.Provider value={contextValue}>
        <ThemeChangeBtn />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
