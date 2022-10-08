import { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import { GlobalStyle, theme } from '@common/styles';
import { ThemeProvider } from '@emotion/react';
import { ErrorBoundary } from 'react-error-boundary';
import { Spinner } from '@common/components';

import ErrorBoundaryPage from 'pages/error/ErrorBoundaryPage';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary, error }) => (
        <ErrorBoundaryPage resetErrorBoundary={resetErrorBoundary} error={error} />
      )}
    >
      <Suspense fallback={<Spinner color="grey" size="xl" />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </ThemeProvider>,
);
