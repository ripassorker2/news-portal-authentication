import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../context/PrivetRoutes/PrivetRoute";
import Main from "../Main/Main";
import Catagory from "../Pages/Catagory/Catagory/Catagory";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News/News";
import Login from "../Shared/Login/Login";
import Resister from "../Shared/Resister/Resister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/news"),
        element: <Home />,
      },
      {
        path: "/home",
        loader: () => fetch("http://localhost:5000/news"),
        element: <Home />,
      },
      {
        path: "/catagory/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catagory/${params.id}`),
        element: <Catagory />,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
        element: (
          <PrivetRoute>
            <News></News>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/resister",
        element: <Resister />,
      },
    ],
  },
]);
