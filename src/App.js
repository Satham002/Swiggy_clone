import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setshowLogin={setshowLogin} />:<></>}
      <div className="App">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/Swiggy_clone" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          {/* <Route path="/" element={} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
