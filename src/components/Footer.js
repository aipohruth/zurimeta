import flogo from  '../Assets/flogo.png'
import fb from  '../Assets/fb.png'
import ig from  '../Assets/ig.png'
import twit from  '../Assets/twitter.png'

const Footer = () => {
  return (
    <section id="footer">
        
    <div className="footer-row mx-2 row bg-black">
      <div className="col-12 col-lg-3 d-flex flex-column">
        <div className="p-3 p-lg-5">
          <img src={flogo} alt="metabnb" />
        </div>
        <div className="d-flex pt-3 pt-lg-5 px-3 px-lg-5 pb-3 text-white">
        <img src={fb} className="p-3" alt='facebook' />
          <img src={ig} className="p-3" alt='instagram' />
          <img src={twit} className="p-3" alt='twitter' />
        </div>
        <div className="px-3 px-lg-5 py-3">
          <span className="fs-6 text-white">@ 2022 Metabnb</span>
        </div>
      </div>
      <div className="col-6  col-lg-3">
        <div className="d-flex flex-column text-white py-3 py-lg-5 px-3 px-lg-5">
          <span className="fs-5 fw-semibold text-white pb-2">Community</span>
          <span className="fs-6 py-1 text-white">NFT</span>
          <span className="fs-6 py-1 text-white">Tokens</span>
          <span className="fs-6 py-1 text-white">LandLords</span>
          <span className="fs-6 py-1 text-white">Discord</span>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="d-flex flex-column  py-3 py-lg-5 px-3 px-lg-5">
          <span className="fs-5 fw-semibold text-white pb-2">Places</span>
          <span className="fs-6 py-1 text-white">Castle</span>
          <span className="fs-6 py-1 text-white">Farms</span>
          <span className="fs-6 py-1 text-white">Beach</span>
          <span className="fs-6 py-1 text-white">Learn more</span>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="d-flex flex-column  py-3 py-lg-5 px-3 px-lg-5">
          <span className="fs-5 fw-semibold text-white  pb-2">About us</span>
          <span className="fs-6 py-1 text-white">Road map</span>
          <span className="fs-6 py-1 text-white">Creators</span>
          <span className="fs-6 py-1 text-white">Career</span>
          <span className="fs-6 py-1 text-white">Contact us</span>
        </div>
      </div>
    </div>

        
                </section>
  )
}

export default Footer
