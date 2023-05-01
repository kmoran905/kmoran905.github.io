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
      <RouterProvider router={router}/>
    </React.StrictMode>
  );