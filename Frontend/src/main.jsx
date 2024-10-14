//import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Layout from './Layout/Layout.jsx';
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
// import { ServiceProvider } from './Context/ServiceContext.jsx';
// import { ServiceContext } from './Context/ServiceContext.jsx';
import About from './Pages/About'
import Service from './Pages/Service.jsx';
import Contact from './Pages/Contact'
import Home from './Pages/Home.jsx'
import {SignUpOne}  from './Components/Login.jsx';
import Sprovider from './Components/sprovider.jsx'

import SServiceinfo from './Components/SServiceinfo.jsx';


const router = createBrowserRouter([
  {
    
    path: "/",
    element:<Layout/>,
    children:[
      {    path: "/home",
           element:<Home/>,
      },
      { path: '/rprovider',
        element: <Sprovider/>,
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
        children:[
          { path: 'Electrician',
            element: <SServiceinfo/>,
          },
          { path: 'Cooking',
            element: <SServiceinfo/>
          },
          { path: 'Plumbing',
            element: <SServiceinfo/>
          },
          { path: 'cleaning',
            element: <SServiceinfo/>
          },
          { path: 'carpanter',
            element: <SServiceinfo/>
          },
          { path: 'assembly',
            element: <SServiceinfo/>
          },
          { path: 'assembly',
            element: <SServiceinfo/>
          },
         ],
      },
     
      {
       path: '/userlogin',
        element: <SignUpOne/>,
      },
      {
        path:"",
        element:<Home/>
      }
      
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
 <>
{/* <ServiceProvider>   // context api use 
   <RouterProvider router={router} />
</ServiceProvider>
    */}
 <RouterProvider router={router} />
   </> 

)
