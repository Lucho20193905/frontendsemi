
import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";

const Carrito = () =>{
    const [listadoProducto, setListadoProducto] = useState([])

    const httpObtenerProductos = async () =>{
        const resp = await fetch("http://localhost:4447/productos")
        const data = await resp.json()
        console.log(data)
        setListadoProducto(data)
    }

    useEffect(()=>{
        httpObtenerProductos()
    },[])


    return (
        <Container>
          <Navbar bg="light" expand="lg" style={{ height: '80px' }}>
            <Container fluid>
              <Navbar.Brand href="#"><Image
                src="https://thumbs.dreamstime.com/b/gamepad-icon-controller-isolated-white-background-149257730.jpg"
                rounded style={{ maxHeight: '50px' }} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '50px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#">
                    Support
                  </Nav.Link>
                  <Nav.Link href="#">
                    Review
                  </Nav.Link>
                  <Nav.Link href="#">
                    Ranking
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Image
                  src="https://thumbs.dreamstime.com/b/person-icon-flat-style-man-symbol-person-icon-flat-style-man-symbol-isolated-white-background-simple-people-abstract-icon-118611127.jpg"
                  rounded style={{ maxHeight: '40px' }} />
                <Image
                  src="https://thumbs.dreamstime.com/b/shopping-cart-icon-black-white-shopping-cart-icon-black-white-buttons-white-background-vector-illustration-117843673.jpg"
                  rounded style={{ maxHeight: '40px' }} />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        <h1>Carrito de Compra </h1>
        </Container>
)
    }
export default Carrito