
import logo from '../Assets/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from './Modal';
//import {  Routes, Route } from 'react-router-dom';



function NavBar() {
  return (
    <>
  
    <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand href="/home"><img src={logo} className='nav-img' alt='MetaBnb'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto bars">
            <Nav.Link className='px-4' href="/Home">Home</Nav.Link>
            <Nav.Link className='px-4' href="/placetostay">Place to stay</Nav.Link>
            <Nav.Link className='px-4' >NFTs</Nav.Link>
            <Nav.Link className='px-4'>Community</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/modal" className='btn' >
            <Modal />
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </>
  );
}

export default NavBar;