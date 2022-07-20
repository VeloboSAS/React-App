import React, { Component } from "react";
import {
  Navbar, Container, Nav, Form, FormControl, Button} 
  from "react-bootstrap";
import logo from "./logo.jpg";
import './components.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home  from '../Pages/Home';
import Services  from '../Pages/Services';
import Feedback  from '../Pages/Feedback';
import About  from '../Pages/About';



export default class Header extends Component {
  render() {
    return (
      <>
      {/* <BrowserRouter> */}
        <Navbar fixed="top" collapseOnSelect expand="sm" bg="black" variant="dark">
          <Container>
            <Navbar.Brand href="/" >
              <img
                src={logo}
                height="40"
                width="170"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto mt-2
               mt-lg-1 fs-5 link-info" >
                <Nav.Link as={Link} to="/"> Home </Nav.Link>
                <Nav.Link as={Link} to="/services" > Services </Nav.Link>
                <Nav.Link as={Link} to="/feedback" > Feedback </Nav.Link>
                <Nav.Link as={Link} to="/about" > About </Nav.Link>
              </Nav>
             {/* <Form inline>to
            <FormControl
                   type="text"
                 placeholder="Search"
                  className="me-auto my-2 my-lg-0"
					  /> 
                <Button variant="outline-info">Search</Button> */}
				<a class="btn btn-info" href="/contacts" role="button">Contacts</a>
              {/* </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br/>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/feedback" element={<Feedback/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      {/* </BrowserRouter>   */}
      </>
    );
  }
}
