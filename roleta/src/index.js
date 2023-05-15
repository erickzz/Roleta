import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PaginaPerguntas from './pages/PaginaPerguntas';
import App from './pages/App';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/:tema', element: <PaginaPerguntas /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
