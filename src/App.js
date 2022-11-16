
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PlaceToStay from './components/PlaceToStay';



const App = () => {
 
  return (
    <Router>
       <Link className='hidden' to="/">Home</Link>
        <Link className='hidden' to="/placetostay">PlaceToStay</Link>
      <main>
      <Routes>
        <Route path='/placetostay' element={<PlaceToStay />}/>
        <Route path='/' element={<Home />}/>
        
        </Routes> 
        
      </main>  
  </Router>
  
  )
}

export default App
