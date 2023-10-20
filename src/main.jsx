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
import SelectedBrands from './component/AddCards/SelectedBrands';
import UpdatedCard from './component/AddCards/UpdatedCard';
import PriveteRoutes from './component/AddCards/PriveteRoutes';
import MyCards from './component/AddCards/MyCards';
import Details from './component/AddCards/Details';

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
      element:<PriveteRoutes><AddCards></AddCards></PriveteRoutes>
    },
    {
      path:'/mycards',
      element:<PriveteRoutes><MyCards></MyCards></PriveteRoutes>,
      loader:()=>fetch('https://brand-shop-server-g2onem2a6-shahinaaktershimas-projects.vercel.app/shop')
     
    }
  ,
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/selectedbrands/:id',
    element:<SelectedBrands></SelectedBrands>,
    loader:()=>fetch('https://brand-shop-server-g2onem2a6-shahinaaktershimas-projects.vercel.app/shop')
  },
  {
    path:'/updateshop/:id',
    element:<PriveteRoutes><UpdatedCard></UpdatedCard></PriveteRoutes>,
  loader:({params})=>fetch(`https://brand-shop-server-g2onem2a6-shahinaaktershimas-projects.vercel.app/shop/${params.id}`)
  },
  {
    path:'/details/:id',
    element:<PriveteRoutes><Details></Details></PriveteRoutes>,
    loader:({params})=>fetch(`https://brand-shop-server-g2onem2a6-shahinaaktershimas-projects.vercel.app/shop/${params.id}`)
  }
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>,
)
