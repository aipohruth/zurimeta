
import logo from '../Assets/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand href="#home"><img src={logo} className='nav-img' alt='MetaBnb'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto bars">
            <Nav.Link className='px-4' href="#home">Home</Nav.Link>
            <Nav.Link className='px-4' href="#PTs">Place to stay</Nav.Link>
            <Nav.Link className='px-4' href="#NFTs">NFTs</Nav.Link>
            <Nav.Link className='px-4' href="#Community">Community</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='btn' >
                <button>Connect wallet</button>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;