import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Add from "../src/components/Add.jsx";
import Last30days from "./components/Last30days.jsx";

const router=createBrowserRouter([
  {path:"/",
   element:<App/>,
  },
  {
    path:"add",
    element:<Add/>
  },
  {
    path:"last30days",
    element:<Last30days/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
   
  </React.StrictMode>,
)
