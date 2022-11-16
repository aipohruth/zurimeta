import NavBar from './Navbar';
import Footer from './Footer';
import { showData2 } from "./Data";
import Card from "./Card";
import location from '../Assets/location.png';

import { Link } from "react-router-dom";

const PlaceToStay = () => {
  return (
    <>
        <div className='container'>
      <NavBar />
      </div>
      <div className="containers pt-5">
      <ul className="nav gap-2 gap-lg-4">
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" aria-current="page" to="#">Restaurant</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Cottage</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Castle</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Fantasy city</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">beach</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Cabins</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Off-grid</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link text-dark" to="#">Farm</Link>
        </li>
        <li className="nav-item">
         <button type="button" className="btn border sm-white btn-sm">
            <span className="fs-5 btn btn-sm">Location</span>
            <img src={location} alt='icon' className='px-3'/>
          </button>
        </li>
      </ul>
      </div>

        <div className="container">
      <div class="row px-2 py-5 px-lg-5">
      {showData2.map((info, id) => (
        <div className="col-12 col-md-6 col-lg-3 p-2" key={id}>
          <Card title={info.title} price={info.price} distance={info.distance} time={info.time} logo={info.logo} />
        </div>
      ))}
    </div>
    </div>
                   
        
      <Footer />
    
    </>
    
  )
}

export default PlaceToStay;
