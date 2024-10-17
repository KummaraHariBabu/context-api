import React from "react";
import { ThemeContextProvider } from "./components/provider/ThemeContextProvider";
import ThemeChangeBtn from "./components/theme-btn/ThemeChangeBtn";
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="app">
      <ThemeContextProvider>
        <ThemeChangeBtn />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
