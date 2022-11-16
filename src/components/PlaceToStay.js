import NavBar from './Navbar';
import Footer from './Footer';
import h1 from '../Assets/h1.png';
import h2 from '../Assets/h2.png';
import h3 from '../Assets/h3.png';
import h4 from '../Assets/h4.png';
import h5 from '../Assets/h5.png';
import h6 from '../Assets/h6.png';
import h7 from '../Assets/h7.png';
import h8 from '../Assets/h8.png';
import w1 from '../Assets/w1.png';
import w2 from '../Assets/w2.png';
import w3 from '../Assets/w3.png';
import w4 from '../Assets/w4.png';
import w5 from '../Assets/w5.png';
import w6 from '../Assets/w6.png';
import w7 from '../Assets/w7.png';
import w8 from '../Assets/w8.png';
import location from '../Assets/location.png';
import {FaStar} from "react-icons/fa";
import { Link } from "react-router-dom";

const PlaceToStay = () => {
  return (
    <>
        <div className='container'>
      <NavBar />
      <div className="px-2 p-lg-5">
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
        <li className="nav-item ps-2 ps-lg-4">
          <button type="button" className="btn border sm-white btn-sm">
            <span className="fs-5 btn btn-sm">Location</span>
            <img src={location} alt='icon' className='px-3'/>
          </button>
        </li>
      </ul>
      
    </div>
  
      {/*<div className="pts-option">
        <ol>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantasy City</li>
            <li>Beach</li>
            <li>Cabin</li>
            <li>Off Grid</li>
            <li>Farm</li>
        </ol>
        </div>*/}
      

      <div className="show-row">
            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={w1} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
            <div className="col">
            
                <div className="col-card">
                    <img className='col-img' src={w2} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={w3} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={w4} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
        </div>
      <div className="show-row">
            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={h1} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
            <div className="col">
            
                <div className="col-card">
                    <img className='col-img' src={h2} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={h3} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={h4} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
        </div>
        
        {/*third-row*/}
        <div className="show-row">
            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={h5} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
            <div className="col">
            
                <div className="col-card">
                    <img className='col-img' src={h6} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={h7} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={h8} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
        </div>
        {/*fourthrow */}
        <div className="show-row">
            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={w5} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
            <div className="col">
            
                <div className="col-card">
                    <img className='col-img' src={w6} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={w7} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="col-card">
                    <img className='col-img' src={w8} alt="house" />
                    <div className="col-footer">
                        <p>Desert King</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className="col-footer">
                        <p>2345km away</p>
                        <p >available for 2weeks stay</p>
                    </div>
                    <div className="icons">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
            </div>
        </div>
        </div>
      <Footer />
    
    </>
    
  )
}

export default PlaceToStay;
