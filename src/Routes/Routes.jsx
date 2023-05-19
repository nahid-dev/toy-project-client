import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Layouts/Mainpage";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/Home/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addAToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
