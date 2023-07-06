import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import List from "./layouts/List";
import PokemonDetail from "./pages/PokemosDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: "/pokemon",
    element: <List />,
    children: [
      {
        path: "/pokemon/:name",
        element: <PokemonDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/**
 * landing page
 * /pokemon pikachu
 * /pokemon/ pokemon
 */
