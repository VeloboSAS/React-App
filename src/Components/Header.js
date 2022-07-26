import React, { Component } from "react";
import {Navbar, Container, Nav} 
from "react-bootstrap";
import logo from "./logo.jpg";
import {Routes, Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import Home  from '../Pages/Home';
import Services  from '../Pages/Services';
import Feedback  from '../Pages/Feedback';
import About  from '../Pages/About';
import Contacts  from '../Pages/Contacts';


const Styles = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link {
      color: #D3D3D3;
      &:hover {
          color: #A9A9A9;
      }
    }
`
const vkstyle = {
    color: '#D3D3D3',

}

export default class Header extends Component {
  render() {
    return (
      <>
      <link rel = "stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
        <Styles>
          <Navbar fixed="top" collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="40"
                  width="210"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto mt-2 mt-lg-0 fs-5" >
                  <Nav.Link> <Link to="/" > Главная </Link> </Nav.Link>
                  <Nav.Link> <Link to="/services" > Услуги </Link> </Nav.Link>
                  <Nav.Link> <Link to="/feedback" > Отзывы </Link> </Nav.Link>
                  <Nav.Link> <Link to="/about" > О нас </Link> </Nav.Link>
                </Nav>
                <Nav class="btn btn-social-icon btn-vk">
                  <a href="#"><i class="fa fa-vk fa_custom " style={vkstyle}></i></a>
                </Nav>
                <Nav class="btn btn-social-icon btn-instagram">  
                  <a href="#"><i class="fa fa-instagram fa_custom " style={vkstyle}></i></a>
                </Nav>
                <Nav >
                  <a class="btn btn-outline-secondary"  href="/contacts" role="button">Контакты</a>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Styles>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/feedback" element={<Feedback/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contacts" element={<Contacts/>} />
        </Routes>  
      </>
    );
  }
}
