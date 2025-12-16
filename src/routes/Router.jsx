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
import ProductDetails from "../pages/products/ProductDetails";
import Dashboard from "../pages/admin/Dashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import AllOrders from "../pages/admin/AllOrders";


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
    // {
    //     path: '/all-products',
    //     element: <AllProducts />,
    //     loader: () => fetch('/public/division.json')
    //         .then(res => res.json())
    // },
    {
        path: '/product-details',
        element: <ProductDetails />,
        loader: ({ params }) =>
            fetch(`/public/division/${params.id}.json`)
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
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "users",
                element: <ManageUsers />,
            },
            // {
            //     path: "products",
            //     element: <AllProducts />,
            // },
            {
                path: 'all-products',
                element: <AllProducts />,
                loader: () => fetch('/public/division.json')
                    .then(res => res.json())
            },
            {
                path: "orders",
                element: <AllOrders />,
            },
        ],
    },
]);