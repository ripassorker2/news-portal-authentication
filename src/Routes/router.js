import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Catagory from "../Pages/Catagory/Catagory/Catagory";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catagory/:id", element: <Catagory /> },
      { path: "/news/:id", element: <News /> },
    ],
  },
]);
