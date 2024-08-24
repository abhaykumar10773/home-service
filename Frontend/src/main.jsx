//import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Layout from './Layout/Layout.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import {BrowserRouter, RouterProvider,createBrowserRouter} from 'react-router-dom';
//import Header from './Components/Header.jsx';
//import Footers from './Components/footers.jsx';
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Home from './Pages/Home.jsx'



const router = createBrowserRouter([
  {
    
    path: "/",
    element:<Layout/>,
    children:[
      {path: "/home",
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/service',
        element:<Service/>,
       // children : [
          // { path: 'plumber',
          //   element: <plumber/>
          // },
          // { path: 'electricity',
          //   element: <electricity/>
          // },
          // { path: 'carpenter',
          //   element: <carpanter/>
          // },
          // { path: 'house cleaner',
          //   element: <housecleaner/>
          // },
        //]
      },
      {
        path: '/sign',
        element: <Auth0Provider />
      },
      {
        path:"",
        element:<Home/>
      }
      
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider 

    domain="dev-lh11ift7vxqx7iv3.us.auth0.com"
    clientId="feSXhRUzkbPnW9u5wroDfVww7VzDVUaH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <RouterProvider router={router}/>

    
  </Auth0Provider>
)
