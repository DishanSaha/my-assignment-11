import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import ErrorPage from "../components/ErrorPage";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import AllProducts from "../pages/products/AllProducts";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: '/all-products',
        element: <AllProducts />,
        loader: () => fetch('/public/division.json')
            .then(res => res.json())
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/contact',
        element: <Contact />,
        loader: () => fetch('/public/warehouses.json')
            .then(res => res.json())
    }
]);