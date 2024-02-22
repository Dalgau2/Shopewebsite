import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./Component/Context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/NavBar/Navbar.jsx";
import Swipeerslide from "./Component/Swiper/SwiperSlide.jsx";
import HomePage from "./Component/Page/Home.jsx";
import OfferCard from "./Component/Card/Card.jsx";
import CardList from "./Component/Card/Cardlist.jsx";
import Swiperslide from "./Component/Swiper/SwiperSlide.jsx";
import ProductCardlist from "./Component/Card/ProductCard/ProductCard.jsx";
import Allcategory from "./Component/Card/CategoryCard/AllCatigoryCardList.jsx";
import DividerHeading from "./Component/Dvider/Divider.jsx";
import ProductCard from "./Component/Card/ProductCard/ProductCard.jsx";
import AboutPage from "./About/AboutPage.jsx";
// import { SwiperSlide } from "swiper/react";
// import OfferCard from "./Component/OfferCard/Card.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <AboutPage/>
    </UserProvider>
  </BrowserRouter>
);
