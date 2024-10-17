import React, { useState } from "react";
import ThemeContext from "./context/contextapi";
import ThemeChangeBtn from "./components/ThemeChangeBtn";

const App = () => {
  const [theme, setTheme] = useState("white");
  const themeHandler = () => {
    setTheme(theme === "white" ? "black" : "white");
  };
  const contextValue = {
    theme,
    themeHandler,
  };
  return (
    <div className="app">
      <ThemeContext.Provider value={contextValue}>
        <ThemeChangeBtn />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
