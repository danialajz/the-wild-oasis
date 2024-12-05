import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkmodeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );
  function toggleDarkmode() {
    setIsDarkMode((isDark) => !isDark);
  }
  return (
    <DarkmodeContext.Provider value={{ isDarkMode, toggleDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkmodeContext);
  if (context === undefined) throw new Error("darkmode context is undefined");
  return context;
}
export { DarkModeProvider, useDarkMode };
