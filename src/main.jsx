import App from 'App';
import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const route = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("App")).render(
    <React.StrictMode>
      <RouterProvider router={route}/>
    </React.StrictMode>
  );
import App from 'App';
import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
  ]);
  //Creating root
  ReactDOM.createRoot(document.getElementById("App")).render(
    <React.StrictMode>
      <RouterProvider router={route}/>
    </React.StrictMode>
  );