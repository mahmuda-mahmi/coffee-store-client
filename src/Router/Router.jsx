
import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../Components/Home';
import AddCoffee from '../Components/AddCoffee';
import UpdateCoffee from '../Components/UpdateCoffee';
import CoffeeDetails from '../Components/CoffeeDetails';
import App from '../App';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee'),
            },
            {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>,
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
            },
            {
                path: "/coffeeDetails",
                element: <CoffeeDetails></CoffeeDetails>,
            },
        ]
    },
]);

export default Router;



