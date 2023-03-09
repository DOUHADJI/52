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
import Parametres from "./userInterface/Parametres/Parametres";
import UpdateProfil from "./userInterface/Parametres/updateProfil";
import Layout from "./userInterface/Layout/Layout";
import Profil from "./userInterface/Parametres/Profil";



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
    path: "/backoffice",
    element: <Layout />,
    children: [

      {
        path: 'accueil',
        element: <Dashboard/>
      },

      {
        path: "ludis",
        element: <Ludis/>,
       
      },

      {
        path: "entrainement",
        element: <Entrainement />
      },
    
      {
        path: "mon_compte",
        element: <Parametres />,

        children : [
          {
            path: "informations_utilisateur",
            element : <Profil />
          },

          {
            path: "mettre_mes_informations_a_jour",
            element: <UpdateProfil />
          
          }
        ]
      },
    ]
  },


 


]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

