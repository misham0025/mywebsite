import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import Products from './Components/Products';
import Productview from './Components/Productview';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className='wrapper'>
    {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<Footer/>}/>
    <Route path="/pro" element={<Products/>}/>
    <Route path="/provu" element={<Productview/>}/>
    <Route path="/nav" element={<Navbar/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/" element={<Login/>}/>
    </Routes> 
  </BrowserRouter> */}
  <Navbar/>
  <Header/>
  </div>
  );
}

export default App;
