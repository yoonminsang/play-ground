import { lazy } from 'react';
import type { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { mUrl } from 'const/url';
import 'react-toastify/dist/ReactToastify.css';

const RootPage = lazy(() => import('./pages'));
const LocalPage = lazy(() => import('./pages/local'));
const GamePage = lazy(() => import('./pages/local/game'));
const RankingPage = lazy(() => import('./pages/local/ranking'));

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={mUrl.toString()} element={<RootPage />} />
        <Route path={mUrl.local.toString()} element={<LocalPage />} />
        <Route path={mUrl.local.game.toString()} element={<GamePage />} />
        <Route path={mUrl.local.ranking.toString()} element={<RankingPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </BrowserRouter>
  );
};

export default App;
