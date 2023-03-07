import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./userInterface/Dashboard/Dashboard";
import Welcome from "./Welcome";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />
  },

  {
    path : "/sign_in",
    element : <SignIn />,
    errorElement: <ErrorPage />
  },

  {
    path : "/sign_up",
    element : <SignUp />,
    errorElement: <ErrorPage />
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement : <ErrorPage />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); */