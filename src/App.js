
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import NavBar from './components/Navbar';
import Header from './components/Header';
import Brands from './components/Brands';
import Show from './components/Show';
import About from './components/About';
import Footer from './components/Footer';


const App = () => {
 
  return (
    <>
    <div className='container'>
      <h2>Hello</h2>
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

export default App
