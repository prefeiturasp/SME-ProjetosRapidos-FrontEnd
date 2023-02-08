import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Zoom } from 'react-toastify';
import RoutesManage from "infrastructure/router/routes";
import Layout from "Layout";
import "resources/style/style";
import 'react-toastify/dist/ReactToastify.min.css';

export default function App(){
  return (
    <Layout>
      <BrowserRouter>
        <RoutesManage/>
        <ToastContainer
            closeOnClick
            draggable
            newestOnTop
            hideProgressBar
            autoClose={5000}
            transition={Zoom}
            position='bottom-right'
            theme='colored'
        />
      </BrowserRouter>
    </Layout>
  );
}
