import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Dashboard from "./userInterface/dashboard/dashboard";
import Ludis from "./userInterface/Ludis/Ludis";
import Welcome from "./Welcome";
import Parametres from "./userInterface/parametres/parametres";
import UpdateProfil from "./userInterface/parametres/updateProfil";
import Layout from "./userInterface/Layout/layout";
import Profil from "./userInterface/parametres/profil";
import UpdatePassword from "./userInterface/parametres/updatePassword";
import Ludi from "./userInterface/Ludis/SingleLudi";
import Recruitment from "./userInterface/recruitment/recruitment";



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
        path: "ludis/:ludiId/:ludiName/:ludiSpecialite",
        element: <Ludi/>
       
      },

      {
        path : "ludis/:ludiName/recruiter",
        element : <Recruitment />
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
          
          },

          {
            path: "changer_mon_mot_de_passe",
            element : <UpdatePassword />
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

