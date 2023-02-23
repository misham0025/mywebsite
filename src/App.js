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
import { ForgotPassword } from "./Components/Forgetpassword";
import Postad from "./Components/Postad";

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
            <Route path="/postad" element={<Postad />} />
            <Route path="/foo" element={<Footer />} />
          </Route>
          <Route path="/log" element={<Login />} />
          <Route path="/forgetp" element={<ForgotPassword />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
