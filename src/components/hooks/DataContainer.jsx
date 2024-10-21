import React, { useContext } from 'react'
import ThemeContext from '../provider/ThemeCOntext';
import LangContext from '../provider/LangContext';

const DataContainer = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    const { lang, changeLang } = useContext(LangContext);
  return (
    <div>
      <h1>Main </h1>
      <p>theme: {theme}</p>
      <p>Language: {lang}</p>
      <button onClick={changeTheme}>Change Theme</button>
      <button onClick={changeLang}>Change Lang</button>
    </div>  
    )
}

export default DataContainer