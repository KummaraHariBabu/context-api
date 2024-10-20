import React, { useContext } from "react";
import LangContext from "../provider/LangContext";

const Footer = () => {
  const { lang, changeLang } = useContext(LangContext);
  return (
    <div>
      <h1>Footer</h1>
      <p>Language: {lang}</p>
      <button onClick={changeLang}>Change</button>
    </div>
  );
};

export default Footer;
