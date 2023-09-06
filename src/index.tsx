import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './helpers/AppRoutes';
import { AppProvider } from './helpers/app-store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <AppProvider>
      <AppRoutes />
      <ToastContainer />
    </AppProvider>
  </>
);
