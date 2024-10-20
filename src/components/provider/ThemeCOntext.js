import { createContext, useEffect } from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    return localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
