import { createContext } from "react";

const themes = {
  light: {
    background: "#eeeeee",
    color: "black"
  },
  dark: {
    background: "#222222",
    color: "white"
  }
}

const defaultContext = {
  theme: themes.light,
  toggleTheme: () => { },
};

const AppContext = createContext(defaultContext);

export { AppContext, themes };