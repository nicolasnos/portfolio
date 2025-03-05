import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Components/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { IdiomaProvider } from "./LanguageContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IdiomaProvider>
      <RouterProvider router={router} />
    </IdiomaProvider>

  </React.StrictMode>
);
