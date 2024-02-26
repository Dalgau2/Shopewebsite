import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./Component/Context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import AllCategoryList from "./Component/CardComponent/CardlistComponent/AllCategoryList.jsx";
import AllCategoryCard from "./Component/CardComponent/CarComponent/AllCategoryCard.jsx";
import SingleProductList from "./Component/SingleCategory/OneProductList.jsx";
// import SingleProductList from "./Component/SingleCategory/SingleCategoryList.jsx"
import OneProductList from "./Component/SingleCategory/OneProductList.jsx";

// import OfferCard from "./Component/OfferCard/Card.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <App/>
    </UserProvider>
  </BrowserRouter>
);
