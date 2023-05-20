import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Layouts/Mainpage";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/Home/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import AllToys from "../Pages/Home/AllToys/AllToys";
import MyToys from "../Pages/Home/MyToys/MyToys";
import PrivetRoutes from "./PrivetRoutes";
import Blogs from "../Pages/Home/Blogs/Blogs";
import UpdateToys from "../Pages/Home/MyToys/UpdateToys";
import ToyDetails from "../Pages/Home/AllToys/ToyDetails";

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
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/legoSets"),
      },
      {
        path: "/toyDetails/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/legoSets/${params.id}`),
      },
      {
        path: "/myToys",
        element: (
          <PrivetRoutes>
            <MyToys></MyToys>
          </PrivetRoutes>
        ),
      },
      {
        path: "/updateToys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/legoSets/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
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
