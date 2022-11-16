
import NavBar from './Navbar';
import Header from './Header';
import Brands from './Brands';
import Show from './Show';
import About from './About';
import Footer from './Footer';




const Home = () => {
  return (
    <>
      <div className='container'>
      <NavBar/>
      <Header />
    </div>
      <Brands />
    <div className="container">
     <Show />
    </div>
      <About />
      <Footer />
     </>
  )
}

export default Home
