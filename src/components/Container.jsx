import React, { useContext } from "react";
import Main from "./test/Main";
import Footer from "./footer/Footer";
import ThemeChangeBtn from "./theme-btn/ThemeChangeBtn";
import ThemeContext from "./provider/ThemeCOntext";
const Container = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <ThemeChangeBtn />
      <hr />
      <Main />
      <hr />
      <Footer />
    </div>
  );
};

export default Container;
