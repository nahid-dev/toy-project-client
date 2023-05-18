import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Layouts/Mainpage";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
