import React, { useContext } from "react";
import ThemeContext from "../../context/contextapi";
import Test from "../test/Test";
import "./change-theme.scss";

const ThemeChangeBtn = () => {
  const { theme, themeHandler } = useContext(ThemeContext);

  return (
    <div>
      <nav className="navbar">
        <h1>
          <i>{`<API>`}</i>
        </h1>
        <div className="change-btn">
          <button 
            className={`btn btn1 ${theme === 'dark-theme' ? 'active' : ''}`} 
            onClick={() => theme === 'light-theme' && themeHandler()}
          >
            🌙
          </button>
          <button 
            className={`btn btn2 ${theme === 'light-theme' ? 'active' : ''}`} 
            onClick={() => theme === 'dark-theme' && themeHandler()}
          >
           ☀️
          </button>
        </div>
      </nav>

      <Test />
    </div>
  );
};

export default ThemeChangeBtn;
