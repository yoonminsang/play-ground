import React from 'react';

import ReactDOM from 'react-dom/client';
import { theme } from '@common/styles';
import { ThemeProvider } from '@emotion/react';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
