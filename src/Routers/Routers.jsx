import AddCoffe from "../Pages/Home/AddCoffe";
import AddCoffee from "../Pages/Home/AddCoffee";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import Root from "../Layout/Root";
import ShowAllCoffee from "../Pages/Home/ShowAllCoffee";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateCoffee from "../Pages/Home/UpdateCoffee";
import Users from "../Pages/Home/Users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addCoffe",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "/showAllCoffee",
        element: <ShowAllCoffee></ShowAllCoffee>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
      }
    ],
  },
]);
