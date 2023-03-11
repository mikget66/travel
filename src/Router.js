import App from './App';
import Dashboard from './pages/Dashboard';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children:[
        {
            
        }
      ]
    },
  ]);

export default Router