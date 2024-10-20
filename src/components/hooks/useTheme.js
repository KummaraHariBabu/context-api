import { useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "white");

    const changeTheme = () => {
      setTheme((theme) => (theme === "white" ? "black" : "white"));
    };
    return {theme,changeTheme}
        
}

export default useTheme;