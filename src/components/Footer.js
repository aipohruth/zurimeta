import flogo from  '../Assets/flogo.png'
import fb from  '../Assets/fb.png'
import ig from  '../Assets/ig.png'
import twit from  '../Assets/twitter.png'

const Footer = () => {
  return (
    <section id="footer">
        <div className="container">
        <div className="footer-row">
            <div className="footer-col-1">
                <img src={flogo} alt='Metabnb' className='footer-img'  width='150'/>
                <div className="social-icons">
                    <img src={fb} alt='facebook' width='25' />
                    <img src={ig} alt='facebook' width='25' />
                    <img src={twit} alt='facebook' width='25' />
                </div>
                
                </div>
                <div className="footer-col">
                <h4>Community</h4>
                <ul>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Lanlords</li>
                    <li>Discord</li>
                </ul>
                </div>
    
                <div className="footer-col">
                <h4>Places</h4>
                <ul>
                    <li>castle</li>
                    <li>farms</li>
                    <li>beach</li>
                    <li>learn more</li>
                </ul>
                </div>

                <div className="footer-col">
                <h4>About us</h4>
                <ul>
                    <li>Road Map</li>
                    <li>Creators</li>
                    <li>Carrer</li>
                    <li>Contact us</li>
                </ul>
                </div>
            


                </div>
                <p className='copy'>&copy; 2022 Metabnb</p>
                </div>
                </section>
  )
}

export default Footer
