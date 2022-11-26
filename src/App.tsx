import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './assets/styles/main.scss';
import {allLinks} from "./routes";
import {MainPage} from "./pages";
import Footer from './components/sections/footer/footer';
import Header from './components/sections/header/header';
import AuthModal from './components/modals/auth-modal/auth-modal';

const router = createBrowserRouter([
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
]);

const App = () => {
  return (
      <>
          <Header/>
          <RouterProvider router={router}/>
          <Footer/>
          <AuthModal/>
      </>
  );
}

export default App;
