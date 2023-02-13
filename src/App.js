import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portal from "./Components/Portal";
import Products from "./Components/Products";
import Productview from "./Components/Productview";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Page404 from "./Components/Page404";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />}>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/prod" element={<Products />} />
          <Route path="/provu" element={<Productview />} />
          <Route path="/foo" element={<Footer />} />
          </Route>
          <Route path="/log" element={<Login  />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
