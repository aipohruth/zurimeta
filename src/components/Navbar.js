
import logo from '../Assets/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mmask from '../Assets/mmask.png';
import wallet from '../Assets/wallet.png';
import arrow from '../Assets/arrow.png';
import { Link } from "react-router-dom";




function NavBar() {
  return (
    <>
  
    <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand href="/home"><img src={logo} className='nav-img' alt='MetaBnb'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto  bars">
            <Link className="nav-link px-4 text-dark" to="/">Home</Link>
            <Link className="nav-link px-4 text-dark" to="/placetostay">Place to stay</Link>
            <Link className="nav-link px-4 text-dark" >NFTs</Link>
            <Link className="nav-link px-4 text-dark">Community</Link>
          </Nav>
          
          <div className="col-12 col-xl-3">
            <div className="text-center px-2">
              <button type="button" className="btn btn-md px-4 text-white" id="connect-btn" style={{ background: "#A02279" }} data-bs-toggle="modal" data-bs-target="#modal-template">
                Connect Wallet
              </button>
              <div class="modal fade" id="modal-template" tabindex="-1" aria-labelledby="MyModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header px-4 py-3">
                      <h1 class="modal-title fs-4 fw-bold" id="MyModalLabel">Connect Wallet</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start px-4 py-3 d-flex flex-column">
                      <label className="small">Choose your preferred wallet:</label>
                      <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                        <button type="button" className="btn btn-lg btn-light text-start my-2 border rounded">
                          <img src={mmask} alt="fox-icon" className="img-fluid pe-3" />
                          <span className="fs-5 fw-bold text-black">Metamask</span>
                          <img src={arrow} className="float-end pt-1" alt="arrow"/>
                        </button>
                        <button type="button" class="btn btn-lg btn-light text-start my-2 border rounded">
                          <img src={wallet} alt="fox-icon" className="img-fluid pe-3" />
                          <span className="fs-5 fw-bold text-black">WalletConnect</span>
                          <img src={arrow} className="float-end pt-1" alt="arrow"/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/*<Nav.Link  className='btn' >
            <button>Connect to wallet</button>
           
  </Nav.Link>*/}
          
        </Navbar.Collapse>
      
    </Navbar>
    </>
  );
}

export default NavBar;
