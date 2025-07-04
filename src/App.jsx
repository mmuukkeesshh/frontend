import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/product/ProductList";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Navbar from "./components/home/Navbar";
import CategoryPage from "./components/category/Category";
import OAuth2Redirect from "./OAuth2Redirect";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLogin === "true");
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={isLoggedIn ? <Products /> : <Navigate to="/" />}
        />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
         <Route path="/oauth2-redirect" element={<OAuth2Redirect setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  

  );
}
