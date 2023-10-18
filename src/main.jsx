import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root';
import Home from './component/Home/Home';
import Error from './component/Error';
import AddCards from './component/AddCards/AddCards';
import Register from './component/login/Register';
import Login from './component/login/Login';
import AuthProvider from './component/login/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[{
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('/homedata.json')
    },
    {
      path:'/addproduct',
      element:<AddCards></AddCards>
    }
  ,
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/login',
    element:<Login></Login>
  }
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>,
)
