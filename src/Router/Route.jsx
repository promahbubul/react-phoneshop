import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import ErrorPage from "../Pages/Error/ErrorPage";
import Phone from "../Pages/Phone/Phone";
import Login from "../Pages/Login/Login";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/phones/:id",
        element: <Phone />,
        loader: () => fetch("/phones.json"),
      },
    ],
  },
]);
