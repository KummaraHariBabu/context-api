import { useState } from 'react'
 
export const useLang = () => {
    const [lang, setLang] = useState("en");

    const changeLang = () => {
      setLang((lang) => (lang === "en" ? "us" : "en"));
    };
  return {lang,changeLang}
}
