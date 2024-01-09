import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Add from "../src/components/Add.jsx";
import PlayDice from "./components/PlayDice.jsx";
import Last30days from './components/Last30days.jsx';
import Top30oftheMonth from './components/Top30oftheMonth.jsx';
import Alltime from './components/Alltime.jsx';

const router=createBrowserRouter([
  {path:"/",
   element:<App/>,
  },
  {
    path:"add",
    element:<Add/>
  },
  {
    path:"PlayDice",
    element:<PlayDice/>
  },
  {
    path:"header",
    element:<App/>
  },
  {
    path:"Last30days",
    element:<Last30days/>
  },
  {
    path:"Top30oftheMonth",
    element:<Top30oftheMonth/>,
  },
  {
    path:"Alltime",
    element:<Alltime/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
   
  </React.StrictMode>,
)
