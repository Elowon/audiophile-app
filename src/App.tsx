import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Headphones from "./pages/HeadPhones";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonePage from "./pages/EarphonePage";
import ProductHeadphone1 from "./pages/ProductHeadphone1";
import ProductHeadphone2 from "./pages/ProductHeadphone2";
import ProductHeadphone3 from "./pages/ProductHeadphone3";
import SpeakerDetails from "./pages/SpeakerDetails";
import SpeakerDetails2 from "./pages/SpeakerDetails2T";
import EarphoneDetails from "./pages/EarphoneDetails";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYou from "./Samples/Thanks";
import Cart from "./Samples/Cart";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/speakers" element={<SpeakersPage />} />
      <Route path="/earphones" element={<EarphonePage />} />
      <Route path="/product1" element={<ProductHeadphone1 />} />
      <Route path="/product2" element={<ProductHeadphone2 />} />
      <Route path="/product3" element={<ProductHeadphone3 />} />
      <Route path="/speaker1" element={<SpeakerDetails />} />
      <Route path="/speaker2" element={<SpeakerDetails2 />} />
      <Route path="/earphone1" element={<EarphoneDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/thankyou/:id" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
