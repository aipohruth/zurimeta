import React from 'react'
import metamask from '../Assets/metamask.png';
import mbtoken from '../Assets/mbtoken.png';
import opensea from '../Assets/opensea.png';

const Brands = () => {
  return (
    <>
     <div className='brands'>
        <div className="brands-grp">
        <img src={mbtoken} alt='MBToken'/>
        <img src={metamask} alt='MetaMask'/>
        <img src={opensea} alt='Opensea'/>
        </div>
      
    </div>
    </>
   
  )
}

export default Brands
