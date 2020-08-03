import React, { useState, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import Routes from './routes';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Routes toggleTheme={toggleTheme} />
          <GlobalStyle />
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
