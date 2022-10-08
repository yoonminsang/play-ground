import { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import { GlobalStyle, theme } from '@common/styles';
import { css, ThemeProvider } from '@emotion/react';
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
      <Suspense
        fallback={
          <div
            css={css`
              width: 100vw;
              height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              position: fixed;
              left: 0;
              top: 0;
            `}
          >
            <Spinner color="grey" size="xl" />
          </div>
        }
      >
        <App />
      </Suspense>
    </ErrorBoundary>
  </ThemeProvider>,
);
