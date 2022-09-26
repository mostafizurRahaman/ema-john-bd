import React from 'react';
import logo from "../../images/Logo.svg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'; 


const Header = () => {
   return (
      <div className='sticky-top'>
         <Navbar bg="dark" className='navbar-dark' expand="lg">
      <Container>
        <Navbar.Brand href="/home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 text-uppercase text-white fw-bold" id='Nav-part'>
            <Nav.Link href="/shop">shop</Nav.Link>
            <Nav.Link href="/inventory">Inventory</Nav.Link>
            <Nav.Link href="/order">Orders</Nav.Link>
            <Nav.Link href="/contact-us">Contact</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
   );
};

export default Header;