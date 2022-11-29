/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Mk_2 from './pages/Mk_2';
import Mk_4_5 from './pages/Mk_4_5';
import Mk_12 from './pages/Mk_12';
import RegistroPage from './pages/RegistroPage'
import Principal from './pages/Principal'
import ListaResena from './pages/ListaResena'
import HistorialOrden from './pages/HistorialOrden'
import Surprise from './pages/Surprise';
import Main from './pages/luis/rankingtotalcomponentes/Main'
import Carrito from './pages/luis/carrito/Carrito'
import Building from './pages/luis/building/Building'
import Mockup21 from './pages/Mockup21';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><Routes>

      <Route path='/Login' element={<Mk_2 />}/>
      <Route path='/formularioOne' element={<Mk_4_5 />}/>
      <Route path='/Componentes' element={<Mk_12 />}/>
      <Route path='/Registro' element={<RegistroPage />}/>
      <Route path='/Principal' element={<Principal />}/>
      <Route path='/ListaResena' element={<ListaResena />}/>
      <Route path='/HistorialOrden' element={<HistorialOrden />}/>
      <Route path='/Surprise' element={<Surprise />}/>
      <Route path='/Main' element={<Main />}/>
      <Route path='/Carrito' element={<Carrito />}/>
      <Route path='/Building' element={<Building />}/>
      <Route path='/Resena' element={<Mockup21 />}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
