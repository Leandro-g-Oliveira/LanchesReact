import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
function Rotas () {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/client/login" element={<Login />}/>
        <Route path="/client/product/:id" element={<Product />}/>
        <Route path="/cart/" element={<Cart />}/>
      </Routes>
    </Router>
  );
}
export default Rotas;