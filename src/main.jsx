import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./Component/Context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import AllCategoryList from "./Component/CardComponent/CardlistComponent/AllCategoryList.jsx";
import AllCategoryCard from "./Component/CardComponent/CarComponent/AllCategoryCard.jsx";
import OneProductCard from "./Component/CardComponent/CarComponent/OneProductCard.jsx";
import OneProduct from "./Component/SingleCategory/OneProduct.jsx";
import MyRating from "./Component/Rating/MyRating.jsx";
// import { AddCartoProvider } from "./Component/Context/addItemscontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
   
      <App/>
   
    </UserProvider>
  </BrowserRouter>
);
