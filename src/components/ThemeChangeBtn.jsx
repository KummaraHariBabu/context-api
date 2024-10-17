import React, { useContext } from "react";
import ThemeContext from "../context/contextapi";
import Test from "./Test";

const ThemeChangeBtn = () => {
  const { theme, themeHandler } = useContext(ThemeContext);
  return (
    <div>
      <h1>Theme: {theme}</h1>
      <button onClick={themeHandler}>Change</button>
      <Test />
    </div>
  );
};

export default ThemeChangeBtn;
