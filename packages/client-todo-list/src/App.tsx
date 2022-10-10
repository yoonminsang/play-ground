import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import RootPage from 'pages';
import 'react-toastify/dist/ReactToastify.css';
import UseSyncExternalStorePage from 'pages/useSyncExternalStore';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/useSyncExternalStore" element={<UseSyncExternalStorePage />} />
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
