import React, { useState, useContext } from 'react';
import { AppContext, themes } from './AppContext';

const ThemeProvider = ({ children }) => {
  const appContext = useContext(AppContext);
  const [isDarkMode, setDarkMode] = useState(false);
  const [context, setContext] = useState(appContext);

  const toggleTheme = () => {
    setContext({ ...context, theme: isDarkMode ? themes.light : themes.dark });
    setDarkMode(!isDarkMode);
  };

  const state = {
    ...context,
    toggleTheme: toggleTheme,
  };

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

export default ThemeProvider;