import {createBrowserRouter} from "react-router-dom";
import {allLinks} from "./routes-setup";
import MainPage from "../pages/main-page";
import Registration from "../pages/registration/registration";
import React from "react";

export const router = createBrowserRouter([
    {
        path: allLinks.mainPage,
        element: <MainPage/>,
    },
    {
        path: allLinks.productPage,
        element: <div>Product</div>,
    },
    {
        path: allLinks.categories,
        element: <div>Categories</div>,
    },
    {
        path: allLinks.registration,
        element: <Registration />
    },
    {
        path: allLinks.login,
        element: <Registration />
    }
]);