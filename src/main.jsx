import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./Component/Context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductCardbg from "./Component/Card/ProductCard/ProductCardbg.jsx";
import AllCategoryHeroSection from "./Component/Card/ProductCard/AllCategoryHeroSection.jsx";
// import { SwiperSlide } from "swiper/react";
// import OfferCard from "./Component/OfferCard/Card.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <App/>
    </UserProvider>
  </BrowserRouter>
);
