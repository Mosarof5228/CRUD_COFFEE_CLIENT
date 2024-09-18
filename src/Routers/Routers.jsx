import AddCoffee from "../Pages/Home/AddCoffee";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import Root from "../Layout/Root";

import {
    createBrowserRouter,
} from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);