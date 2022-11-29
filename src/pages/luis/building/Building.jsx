
import React, { useEffect } from "react";
import {  } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";
import { useState } from "react";
import Lista from "./body/Lista";
import { Card, CardGroup, ListGroup, Col, Layout } from "react-bootstrap";
import ListaComponentes from "./body/Lista";
import FiltroComponente from "./body/FiltroComponente"
 

const Header = () => {
  const [listadoComponentes,setlistadoComponentes]= useState([])
  const [listadoArmadas, setlistadoArmadas] = useState([])

  const httpObtenerArmadas = async () => {
    const response =  await fetch("http://localhost:4447/pcarm_produto");
    const data = await response.json();
    console.log(data);
    setlistadoArmadas(data);
  }

  const httpObtenerComponentes  = async (pc_armado_id = null ) => {
    const ruta = pc_armado_id == null ?
      "http://localhost:4447/productos":
      `http://localhost:4447/productos?pc_armado_producto=${pc_armado_id}`

    const response = await fetch(ruta);
    const data = await response.json();
    console.log(data)
    setlistadoComponentes(data)
  }

  useEffect (() => {
    httpObtenerComponentes();
    httpObtenerArmadas();
  }, [])

  const onPcArmadaSelected = (pc_armado_id) => {
    console.log("Pc armada seleccionada: "+ pc_armado_id);
    httpObtenerComponentes(pc_armado_id);
  }

  return ( <Container>
        <FiltroComponente className="container align-items-center justify-content-center" 
              pcarmado = {listadoArmadas}
              onPcArmadaSelected = {onPcArmadaSelected} />
      <div>COMPONENTES: </div>  
    <Lista
              productos = { listadoComponentes}
          />
          <div>TOTAL PRECIO</div>
          </Container>
  )
}

export default Header;

