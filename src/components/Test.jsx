import React, { useContext } from "react";
import ThemeContext from "../context/contextapi";

const Test = () => {
  const { theme, themeHandler } = useContext(ThemeContext);
  return <div>Test: {theme}</div>;
};

export default Test;
