//import React, { useState } from 'react'
//import data from './Imagedata';
import h1 from '../Assets/h1.png';
import h2 from '../Assets/h2.png';
import h3 from '../Assets/h3.png';
import h4 from '../Assets/h4.png';
import h5 from '../Assets/h5.png';
import h6 from '../Assets/h6.png';
import h7 from '../Assets/h7.png';
import h8 from '../Assets/h8.png';

import {FaStar} from "react-icons/fa";

const Show = () => {
    
  return (
        <section className="show">
        <h1>Inspiration for your next adventure</h1>
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
        
        {/*second-row*/}
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
        
        </section>
  )
}

export default Show
