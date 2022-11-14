import React from 'react'
import htop from '../Assets/htop.png';

const Header = () => {
  return (
    <div className='header-row'>
    <div className="header-col">
    <div className="header-content">
        <h1>Rent a <span>Place</span> away from<br/> <span>Home</span> in the<span> Metaverse</span></h1>
        <p>we provide you access to luxury and affordable 
            houses in the metaverse, get a chance to turn your 
            imagination to reality at your comfort zone</p>

            <form>
              <div className="btn-search">
              <input type='search' placeholder='search for location' />
              <button className='search-btn'>Search</button>
              </div>
            </form>
    </div>
    </div>
    <div className="header-col">
        <img src={htop} alt='three boxes' className='header-img'/>
    </div>
    </div>
  )
}

export default Header
