import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Router  from './Router';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
