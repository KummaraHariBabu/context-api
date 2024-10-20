import React, { useContext } from "react";
import ThemeContext from "../provider/ThemeCOntext";
import LangContext from "../provider/LangContext";

const ThemeChangeBtn = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { lang,changeLang } = useContext(LangContext);
  return (
    <div>
      <h1>Header</h1>
      <p>Theme: {theme}</p>
      <p>Language: {lang}</p>
      <button onClick={ changeTheme}>Change Theme</button>
      <button onClick={changeLang}>Change Lang</button>
    </div>
  );
};

export default ThemeChangeBtn;
