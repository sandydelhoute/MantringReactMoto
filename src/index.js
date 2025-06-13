import React from 'react';
import {useEffect} from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Contact } from './Pages/Contact';
import {Home} from './Pages/Home';
import {Motos} from './Pages/Motos.js';
import { AddMoto } from './Pages/AddMoto.js';
import {MotoContext} from './Contexts/MotoContext.js';
import { useState } from "react";

const MotoList = [
  {id: 0, constructeur: "BMW", modele: "C 400 X", prix: 58},
  {id: 1, constructeur: "BMW", modele: "Hp2 Sport", prix: 578},
  {id: 2, constructeur: "Yamaha", modele: "Neo-s", prix: 588},
  {id: 3, constructeur: "Yamaha", modele: "Fz8", prix: 558},
  {id: 4, constructeur: "Harley Davidson", modele: "Cvo", prix: 5458},
  {id: 5, constructeur: "Harley Davidson", modele: "Dyna Switchback", prix: 65},
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Contact",
    element : <Contact></Contact>
  },
  {
    path: "/Motos",
    element : <Motos></Motos>
  },
  {
    path: "/AddMoto",
    element : <AddMoto></AddMoto>
  }
]);

const Parents = () => {
  const [motos, setMotos] = useState(MotoList);

  useEffect(() => {
    console.log("je suis dans useEffect")
  }, [motos]);
  
  return (
    <MotoContext.Provider value={{motos, setMotos}}>
      <RouterProvider router={router} />
    </MotoContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Parents></Parents>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
