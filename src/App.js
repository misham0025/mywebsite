import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portal from "./Components/Portal";
import Products from "./Components/Products";
import Productview from "./Components/Productview";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Page404 from "./Components/Page404";
import Header from "./Components/Header";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/log" element={<Login />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Portal />}>
            <Route path="/head" element={<Header />} />
            <Route path="/prod" element={<Products />} />
            <Route path="/provu/:id" element={<Productview />} />
            <Route path="/foo" element={<Footer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
