import React from "react";
 import "./App.css"; // Import the CSS file
import  { ThemeContextProvider } from "./components/provider/ThemeCOntext";
  import { LangContextProvider } from "./components/provider/LangContext";
import Container from "./components/Container";

const App = () => {
  // useEffect(()=>{
  //   return localStorage.setItem("theme",theme)
  // },[])
  return (
    <div className="app">
      <LangContextProvider>
        <ThemeContextProvider>
          <Container />
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
};

export default App;