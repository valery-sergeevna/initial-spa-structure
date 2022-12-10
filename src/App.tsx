import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './assets/styles/main.scss';
import Footer from './components/sections/footer/footer';
import Header from './components/sections/header/header';
import {AuthModal} from "./components/modals";
import {router} from "./routes/routes";


const App = () => {
  return (
      <>
          <Header/>
          <RouterProvider router={router}/>
          <Footer/>
          <AuthModal/>
      </>
  );
};

export default App;
