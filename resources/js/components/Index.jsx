import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./userInterface/Dashboard/Dashboard";
import Ludis from "./userInterface/Ludis/Ludis";
import Welcome from "./Welcome";
import Entrainement from "./userInterface/Entrainement/Entrainement";
import { UserContextProvider } from "./userContext";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },

  {
    path : "/sign_in",
    element : <SignIn />,
  },

  {
    path : "/sign_up",
    element : <SignUp />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/ludis",
    element: <Ludis/>,
   
  },

  {
    path: "/entrainement",
    element: <Entrainement />
  }

]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

