import { createContext, useState } from "react";

const LangContext = createContext();
export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const changeLang = () => {
    setLang((lang) => (lang === "en" ? "us" : "en"));
  };
  return <LangContext.Provider value={{lang,changeLang}}>{children}</LangContext.Provider>;
};

export default LangContext;
