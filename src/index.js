import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import Layout from "./screens/layout";
import ErrorPage from "./screens/error-page";
import Contact from "./screens/contact";
import Products from "./screens/products";
import ProductDetails from "./screens/productDetails";
import About from "./screens/about";
import Profile from "./screens/profile";
import Basket from "./screens/basket";
import Logout from "./screens/logout";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Forgot from "./screens/forgot";
import Orders from "./screens/orders";
import Favorites from "./screens/favorites";

import AdminLogout from "./screens/adminLogout";
import AdminLogin from "./screens/adminLogin";
import AdminSignup from "./screens/adminSignup";
import AdminOrders from "./screens/adminOrders";
import AdminUsers from "./screens/adminUsers";
import AdminProducts from "./screens/adminProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "admin/logout",
        element: <AdminLogout />,
      },
      {
        path: "admin/login",
        element: <AdminLogin />,
      },
      {
        path: "admin/signup",
        element: <AdminSignup />,
      },
      {
        path: "admin/orders",
        element: <AdminOrders />,
      },
      {
        path: "admin/users",
        element: <AdminUsers />,
      },
      {
        path: "admin/products",
        element: <AdminProducts />,
      },
      {
        path: "forgot",
        element: <Forgot />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
