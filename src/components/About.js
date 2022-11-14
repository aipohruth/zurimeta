import hfooter from '../Assets/hfooter.png'

const About = () => {
  return (
    <section id="about">
        <div className="container">
        <div className="about-row">
            <div className="about-col">
                <div className="about-col-content">
                <h2>Metabnb NFTs</h2>
                <p>Discover our NFT gift cards collection. Loyal customers
                     gets amazing gift cardswhich are traded as NFTs. These NFTs
                      gives our cutomer access to loads of our exclusive services.</p>

                    <button className="btn-white">Learn more</button>
                </div>
                
            </div>
            <div className="about-col">
            <div className="about-col-image">
                <img src={hfooter} width='500' className='about-img' alt="Three boxes overlapping"/>
            </div>
            </div>
        </div>
        </div>
      
    </section>
  )
}

export default About
